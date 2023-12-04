import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { useCallback, useContext, useEffect } from "react";
import { PartsOfMachine } from "./components/PartsOfMachine";
import { MachineScore } from "./components/MachineScore";
import { MachineType } from "./../../enums";
import { useTheme, Button, Text } from "react-native-paper";
import { MachineContext } from "../../context/MachineContext";
import { useMachineData } from "./hooks/useMachineData";

const MachineFeature = () => {
  const { colors } = useTheme();
  const { machineData } = useContext(MachineContext);
  const { calculateHealthScore, fetchMachineData } = useMachineData();

  const calculateHealth = useCallback(async () => {
    await calculateHealthScore(machineData);
  }, [machineData]);

  useEffect(() => {
    console.log("machineData: ", machineData);
    if (!machineData) {
      fetchMachineData();
    }
  }, [machineData]);

  return (
    <View style={styles.container}>
      {(!machineData || !machineData.machines) && (
        <View style={styles.empty}>
          <Link href="/(tabs)/logpart" style={styles.link}>
            <Text
              style={{
                color: colors.primary,
              }}
              variant="bodyLarge"
            >
              Please log a part to check machine health
            </Text>
          </Link>
        </View>
      )}
      {machineData && machineData.machines && (
        <View style={styles.body}>
          <PartsOfMachine
            machineName={"Welding Robot"}
            parts={machineData.machines.weldingRobot}
          />
          <PartsOfMachine
            machineName={"Assembly Line"}
            parts={machineData.machines.assemblyLine}
          />
          <PartsOfMachine
            machineName={"Painting Station"}
            parts={machineData.machines.paintingStation}
          />
          <PartsOfMachine
            machineName={"Quality Control Station"}
            parts={machineData.machines.qualityControlStation}
          />
          <View style={styles.separator} />
          <Text style={styles.fontBold} variant="bodyLarge">
            Factory Health Score
          </Text>
          <Text variant="bodyMedium">
            {machineData?.scores?.factory >= 0
              ? machineData?.scores?.factory
              : "Not yet calculated"}
          </Text>
          <View style={styles.separator} />
          {machineData?.scores?.machineScores && (
            <>
              <Text style={styles.fontBold} variant="bodyLarge">
                Machine Health Scores
              </Text>
              {Object.keys(machineData?.scores?.machineScores).map((key) => (
                <MachineScore
                  key={key}
                  machineName={key as MachineType}
                  score={
                    machineData.scores.machineScores[key as MachineType] ?? ""
                  }
                />
              ))}
            </>
          )}
        </View>
      )}
      <View style={styles.separator} />
      <View style={styles.buttons}>
        <Button
          buttonColor={colors.primary}
          textColor="#FFF"
          onPress={calculateHealth}
          style={{
            borderRadius: 4,
          }}
        >
          Calculate Health
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 24,
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  body: {
    width: "100%",
    flex: 1,
    paddingVertical: 24,
  },
  fontBold: {
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: "100%",
    backgroundColor: "#dbdbdb",
  },
  text: {},
  link: {
    paddingBottom: 15,
  },
  linkText: {
    color: "#2e78b7",
  },
  buttons: {
    marginTop: 10,
    width: "100%",
    marginBottom: 24,
  },
});

export default MachineFeature;
