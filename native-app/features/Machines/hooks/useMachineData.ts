import { useContext } from "react";
import { MachineData, MachineDataScores, MachineHistory } from "../../../types";
import { handleError } from "../../../utils/errorHandling";
import {
  serviceMachines,
  serviceGetMachinesData,
  serviceDeleteHistory,
} from "./../../../service/machine/serviceMachines";
import { MachineContext } from "../../../context/MachineContext";
import { parse } from "path";

export const useMachineData = () => {
  const { setScores, updateMachineData } = useContext(MachineContext);

  const calculateHealthScore = async (machineData: MachineData) => {
    try {
      const scores: MachineDataScores = await serviceMachines({
        machineData: machineData,
      });
      if (scores.factory) {
        setScores(scores);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const fetchMachineData = async () => {
    try {
      const response: MachineHistory = await serviceGetMachinesData();
      console.log("fetchMachineData: ", response);
      if (response) {
        const machineData: MachineData = {
          machines: response.machines,
          scores: {
            factory: response.point,
            machineScores: response.scores,
          },
        };
        updateMachineData(machineData);
        setScores({
          factory: response.point,
          machineScores: response.scores,
        });
      } else {
        updateMachineData(null);
      }
    } catch (error) {
      handleError(error);
    }
  };

  return {
    calculateHealthScore,
    fetchMachineData,
  };
};
