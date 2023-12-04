import React, { useCallback, useEffect, useState } from "react";
import { Button, Platform, StyleSheet, TextInput } from "react-native";

import { Text } from "react-native-paper";
import { machineNames } from "../constants";

export const MachineScore = ({
  machineName,
  score,
}: {
  machineName: string;
  score: string;
}) => {
  return (
    <>
      {score && (
        <>
          <Text
            style={styles.text}
          >{`${machineNames[machineName]}: ${score}`}</Text>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {},
});
