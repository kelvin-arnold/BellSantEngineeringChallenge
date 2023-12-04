import React, { useCallback, useEffect, useState } from "react";
import { Button, Platform, StyleSheet, TextInput } from "react-native";

import { Text } from "react-native-paper";
import { MachineType } from "./../../../enums";
import { machineNames } from "./../constants";

export const MachineScore = ({
  machineName,
  score,
}: {
  machineName: MachineType;
  score: string;
}) => {
  return (
    <>
      {score && (
        <>
          <Text variant="bodyMedium">{`${machineNames[machineName]}: ${score}`}</Text>
        </>
      )}
    </>
  );
};
