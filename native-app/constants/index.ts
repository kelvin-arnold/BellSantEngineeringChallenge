import { MachineType } from "../enums";
import { MachineNamesType } from "../types";

export const machineNames: MachineNamesType = {
  [MachineType.WeldingRobot]: "Welding Robot",
  [MachineType.PaintingStation]: "Painting Station",
  [MachineType.AssemblyLine]: "Assembly Line",
  [MachineType.QualityControlStation]: "Quality Control Station",
};
