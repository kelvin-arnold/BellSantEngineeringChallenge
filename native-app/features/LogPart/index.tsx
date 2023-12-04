import React, { useCallback, useContext, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { Text, Button, useTheme } from "react-native-paper";
import { MachineContext } from "./../../context/MachineContext";
import Picker from "./../../components/Picker";
import {
  machineNames as fixedMachineNames,
  partNames as fixedPartnames,
} from "./constants";
import { useLogPart } from "./hooks/useLogPart";

const LogPart = () => {
  const { colors } = useTheme();
  const { machineData } = useContext(MachineContext);
  const { saveHealthScore } = useLogPart();
  const [machineName, setMachineName] = useState("");
  const [machineNames, setMachineNames] = useState(fixedMachineNames);
  const [partName, setPartName] = useState("");
  const [partNames, setPartNames] = useState(fixedPartnames);
  const [partValue, setPartValue] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const savePart = async () => {
    const newMachineData = machineData
      ? JSON.parse(JSON.stringify(machineData ?? {}))
      : { machines: {} };
    if (!newMachineData.machines[machineName]) {
      newMachineData.machines[machineName] = {};
    }
    newMachineData.machines[machineName][partName] = partValue;
    const response = await saveHealthScore(newMachineData);
    if (response) {
      setIsSaved(true);
      setPartName("");
      setPartValue("");
      setMachineName("");
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    }
  };

  const setPartNamesForMachine = useCallback((machineName: string) => {
    const machine = fixedMachineNames.find(
      ({ value }) => value === machineName
    );
    if (!machine) {
      return;
    }
    setMachineName(machineName);
    setPartNames(machine.partNames);
  }, []);

  return (
    <View style={[styles.container]}>
      <Text style={styles.label} variant="labelMedium">
        Machine Name
      </Text>
      <Picker
        value={machineName}
        onSetValue={setPartNamesForMachine}
        items={machineNames}
      />
      <Text style={styles.label} variant="labelMedium">
        Part Name
      </Text>
      <Picker value={partName} onSetValue={setPartName} items={partNames} />
      <Text style={styles.label} variant="labelMedium">
        Part Value
      </Text>
      <TextInput
        style={styles.input}
        value={partValue}
        onChangeText={(text) => setPartValue(text)}
        placeholder="Enter part value"
      />

      <Button
        buttonColor={colors.primary}
        textColor="white"
        style={{ borderRadius: 4 }}
        onPress={savePart}
      >
        Save
      </Button>

      {isSaved && (
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Text style={styles.healthScore} variant="bodyLarge">
            Saved Successfully 🎉
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 20,
    width: "100%",
  },
  label: {
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  healthScore: {
    fontWeight: "bold",
    marginTop: 20,
    color: "#128f46",
  },
});

export default LogPart;
