import { useContext } from "react";
import { MachineData, MachineDataScores } from "../../../types";
import { handleError } from "../../../utils/errorHandling";
import { serviceMachines } from "./../../../service/machine/serviceMachines";
import { MachineContext } from "../../../context/MachineContext";

export const useLogPart = () => {
  const { setScores, updateMachineData } = useContext(MachineContext);

  const saveHealthScore = async (
    machineData: MachineData
  ): Promise<boolean> => {
    try {
      await updateMachineData(machineData);
      // const scores: MachineDataScores = await serviceMachines({
      //   machineData: machineData,
      // });
      // if (scores.factory) {
      //   setScores(scores);
      // }
      return true;
    } catch (error) {
      handleError(error);
      return false;
    }
  };
  return {
    saveHealthScore,
  };
};
