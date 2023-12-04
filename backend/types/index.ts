export type User = {
  id: string;
  username: string;
  password: string;
};

export type SessionData = {
  id: string;
  date: string;
  user: User;
};

export type Error = {
  messsage: string;
};

import {
  AssemblyLinePart,
  MachineType,
  PaintingStationPart,
  QualityControlStationPart,
  WeldingRobotPart,
} from "./../enums";

export type PartInfo = {
  name:
    | WeldingRobotPart
    | PaintingStationPart
    | AssemblyLinePart
    | QualityControlStationPart;
  value: number;
};

export type MachineNamesType = {
  [key in MachineType]?: string;
};

export type MachineDataScores = {
  factory: string;
  machineScores: MachineNamesType;
};

export type MachineTypeValue = Record<
  | WeldingRobotPart
  | AssemblyLinePart
  | PaintingStationPart
  | QualityControlStationPart,
  string
>;

export type MachineDataMachine = Record<MachineType, MachineTypeValue>;

export type MachineData = {
  machines: MachineDataMachine;
  scores: MachineDataScores;
};

export type MachineDataRequest = {
  user: string;
  machines: MachineDataMachine;
};

export type MachineHistory = {
  userId: string;
  point: string;
  machines: MachineDataMachine;
  scores: MachineNamesType;
};
