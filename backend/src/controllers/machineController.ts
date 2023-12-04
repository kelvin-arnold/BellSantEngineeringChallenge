import { Request, Response } from "express";
import {
  MachineDataRequest,
  MachineHistory,
  MachineNamesType,
  PartInfo,
} from "./../../types";
import {
  MachineType,
  AssemblyLinePart,
  PaintingStationPart,
  QualityControlStationPart,
  WeldingRobotPart,
} from "./../../enums";
import { calculateMachineHealth } from "./../services/machineHealth";
import { MachineDataScores } from "../../types";

const persintenceDataBase: MachineHistory[] = [];

const findUserPersistance = (userId: string) => {
  return persintenceDataBase.find((user) => user.userId.toString() === userId);
};

const findUserIndex = (userId: string) => {
  return persintenceDataBase.findIndex(
    (user) => user.userId.toString() === userId
  );
};

export const getMachineHistory = (req: Request, res: Response) => {
  const { user } = req.query as MachineDataRequest;

  if (!user) {
    return { error: "Invalid input format" };
  }

  const userPersistance = findUserPersistance(user);

  if (userPersistance) {
    res.json(userPersistance);
  } else {
    res.json(null);
  }
};

export const clearMachineHistory = (req: Request, res: Response) => {
  const { user } = req.query as MachineDataRequest;

  if (!user) {
    return { error: "Invalid input format" };
  }

  const userIndex = findUserIndex(user);

  if (userIndex) {
    persintenceDataBase.splice(userIndex, 1);
    res.json({ success: true });
  } else {
    res.status(400).json({ error: "Something wrong" });
  }
};

export const getMachineHealth = (req: Request, res: Response) => {
  const { user, machines } = req.body as MachineDataRequest;

  if (!machines || !user) {
    res.status(400).json({ error: "Invalid data" });
  }

  const machineScores: MachineNamesType = {};

  let factoryScore = 0;
  let machineCount = 0;
  console.log("-machines: ", machines);
  for (const machineName in machines) {
    const machine = machines[machineName as MachineType];
    console.log("--machine: ", machine);
    const machineScore = calculateMachineHealth(
      machineName as MachineType,
      Object.keys(machine).reduce((parts: PartInfo[], partName) => {
        console.log("---machine key: ", partName);

        const partNameTyped = partName as
          | WeldingRobotPart
          | AssemblyLinePart
          | PaintingStationPart
          | QualityControlStationPart;

        console.log("---machine value: ", parseFloat(machine[partNameTyped]));
        parts.push({
          name: partNameTyped,
          value: parseFloat(machine[partNameTyped]),
        });
        return parts;
      }, [])
    );
    console.log("--machineScore: ", machineScore);
    machineScores[machineName as MachineType] = machineScore.toFixed(2);

    factoryScore += machineScore;
    machineCount++;
  }

  factoryScore = machineCount > 0 ? factoryScore / machineCount : 0;

  console.log("factoryScore: ", factoryScore);
  console.log("machineScores: ", machineScores);

  const userPersistance = findUserPersistance(user);
  if (userPersistance) {
    userPersistance.point = factoryScore.toFixed(2);
    userPersistance.machines = machines;
    userPersistance.scores = machineScores;
  } else {
    persintenceDataBase.push({
      userId: user,
      point: factoryScore.toFixed(2),
      machines: machines,
      scores: machineScores,
    });
  }

  const dataScores: MachineDataScores = {
    factory: factoryScore.toFixed(2),
    machineScores,
  };

  res.json(dataScores);
};
