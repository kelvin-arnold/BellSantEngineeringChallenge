import { MachineNamesType } from "./../../../types";
import { MachineType } from "./../../../enums";

//Machine enum value to name mapping
export const machineNames: MachineNamesType = {
  [MachineType.WeldingRobot]: "Welding Robot",
  [MachineType.PaintingStation]: "Painting Station",
  [MachineType.AssemblyLine]: "Assembly Line",
  [MachineType.QualityControlStation]: "Quality Control Station",
};
