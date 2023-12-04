import { MachineType } from "../../../enums";

export const machineNames = [
  {
    label: "Welding Robot",
    value: MachineType.WeldingRobot,
    partNames: [
      { value: "errorRate", label: "Error Rate" },
      { value: "vibrationLevel", label: "Vibration Level" },
      { value: "electrodeWear", label: "Electrode Wear" },
      {
        value: "shieldingPressure",
        label: "Shielding Pressure",
      },
      { value: "wireFeedRate", label: "Wire Feed Rate" },
      { value: "arcStability", label: "Arc Stability" },
      { value: "seamWidth", label: "Seam Width" },
      {
        value: "coolingEfficiency",
        label: "Cooling Efficiency",
      },
    ],
  },
  {
    label: "PaintingStation",
    value: MachineType.PaintingStation,
    partNames: [
      { value: "flowRate", label: "Flow Rate" },
      { value: "pressure", label: "Pressure" },
      {
        value: "colorConsistency",
        label: "Color Consistency",
      },
      {
        value: "nozzleCondition",
        label: "Nozzle Condition",
      },
    ],
  },
  {
    label: "Assembly Line",
    value: MachineType.AssemblyLine,
    partNames: [
      {
        value: "alignmentAccuracy",
        label: "Alignment Accuracy",
      },
      { value: "speed", label: "Speed" },
      {
        value: "fittingTolerance",
        label: "Fitting Tolerance",
      },
      { value: "beltSpeed", label: "Belt Speed" },
    ],
  },
  {
    label: "Quality Control Station",
    value: MachineType.QualityControlStation,
    partNames: [
      {
        value: "cameraCalibration",
        label: "Camera Calibration",
      },
      {
        value: "lightIntensity",
        label: "Light Intensity",
      },
      {
        value: "softwareVersion",
        label: "Software Version",
      },
      {
        value: "criteriaSettings",
        label: "Criteria Settings",
      },
    ],
  },
];

export const partNames = [
  { value: "arcStability", label: "Arc Stability" },
  {
    value: "coolingEfficiency",
    label: "Cooling Efficiency",
  },
  { value: "electrodeWear", label: "Electrode Wear" },
  { value: "seamWidth", label: "Seam Width" },
  {
    value: "shieldingPressure",
    label: "Shielding Pressure",
  },
  { value: "errorRate", label: "Error Rate" },
  { value: "vibrationLevel", label: "Vibration Level" },
  { value: "wireFeedRate", label: "Wire Feed Rate" },
  {
    value: "colorConsistency",
    label: "Color Consistency",
  },
  { value: "flowRate", label: "Flow Rate" },
  {
    value: "nozzleCondition",
    label: "Nozzle Condition",
  },
  { value: "pressure", label: "Pressure" },
  {
    value: "alignmentAccuracy",
    label: "Alignment Accuracy",
  },
  { value: "beltSpeed", label: "Belt Speed" },
  {
    value: "fittingTolerance",
    label: "Fitting Tolerance",
  },
  { value: "speed", label: "Speed" },
  {
    value: "cameraCalibration",
    label: "Camera Calibration",
  },
  {
    value: "criteriaSettings",
    label: "Criteria Settings",
  },
  {
    value: "lightIntensity",
    label: "Light Intensity",
  },
  {
    value: "softwareVersion",
    label: "Software Version",
  },
];
