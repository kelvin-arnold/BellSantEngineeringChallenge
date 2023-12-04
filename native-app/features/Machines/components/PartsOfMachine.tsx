import React from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "react-native-paper";

export const PartsOfMachine = ({
  machineName,
  parts,
}: {
  machineName: string;
  parts: Record<string, string>;
}) => {
  return (
    <>
      {parts && (
        <View style={[styles.card]}>
          <Text variant="bodyLarge" style={[styles.title]}>
            {machineName}
          </Text>
          {Object.keys(parts).map((key) => (
            <Text variant="bodyMedium" key={key}>
              {key}: {parts[key]}
            </Text>
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 16,
    backgroundColor: "#FFF",
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  title: {
    fontWeight: "bold",
  },
});
