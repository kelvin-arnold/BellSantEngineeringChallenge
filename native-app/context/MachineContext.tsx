import React, { createContext, useEffect, useState } from "react";
import { MachineData, MachineDataScores } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { handleError } from "../utils/errorHandling";

// Define the initial context value
type MachineContextValue = {
  machineData: MachineData | null;
  updateMachineData: (machineData: MachineData) => void;
  resetMachineData: () => void;
  loadMachineData: () => void;
  setScores: (scores: MachineDataScores) => void;
  clearMachineData: () => void;
};

// Create the context
export const MachineContext = createContext<MachineContextValue>(
  {} as MachineContextValue
);

// Create the provider component
export const MachineProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [machineData, setMachineData] = useState<MachineData | null>(null);

  useEffect(() => {
    loadMachineData();
  }, []);

  const loadMachineData = async () => {
    try {
      const storedMachineData = await AsyncStorage.getItem("machineData");
      const machineData: MachineData = JSON.parse(storedMachineData ?? "");

      if (machineData && machineData.machines) {
        setMachineData(machineData);
      } else {
        setMachineData(null);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const resetMachineData = async () => {
    try {
      await AsyncStorage.removeItem("machineData");
      setMachineData(null);
    } catch (error) {
      handleError(error);
    }
  };

  const updateMachineData = async (newMachineData: MachineData) => {
    try {
      await AsyncStorage.setItem("machineData", JSON.stringify(newMachineData));
      setMachineData(newMachineData);
    } catch (error: unknown) {
      handleError(error);
    }
  };

  const setScores = async (newScores: MachineDataScores) => {
    try {
      if (!machineData) {
        return;
      }
      const newMachineData: MachineData = JSON.parse(
        JSON.stringify(machineData)
      ); // Deep copy machine parts

      newMachineData.scores = newScores;

      // Update the state with the new machine data
      setMachineData(newMachineData);

      // Persist the updated machine data to local storage
      await AsyncStorage.setItem("machineData", JSON.stringify(newMachineData));
    } catch (error) {
      handleError(error);
    }
  };

  const clearMachineData = async () => {
    try {
      setMachineData(null);
      await AsyncStorage.removeItem("machineData");
    } catch (error) {
      handleError(error);
    }
  };

  const contextValue: MachineContextValue = {
    machineData,
    updateMachineData,
    resetMachineData,
    loadMachineData,
    setScores,
    clearMachineData,
  };

  return (
    <MachineContext.Provider value={contextValue}>
      {children}
    </MachineContext.Provider>
  );
};
