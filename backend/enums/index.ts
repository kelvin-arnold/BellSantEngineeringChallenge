export enum MachineType {
  WeldingRobot = "weldingRobot",
  PaintingStation = "paintingStation",
  AssemblyLine = "assemblyLine",
  QualityControlStation = "qualityControlStation",
}

// Enum for Welding Robot part names
export enum WeldingRobotPart {
  ErrorRate = "errorRate",
  VibrationLevel = "vibrationLevel",
  ElectrodeWear = "electrodeWear",
  ShieldingPressure = "shieldingPressure",
  WireFeedRate = "wireFeedRate",
  ArcStability = "arcStability",
  SeamWidth = "seamWidth",
  CoolingEfficiency = "coolingEfficiency",
}

// Enum for Painting Station part names
export enum PaintingStationPart {
  FlowRate = "flowRate",
  Pressure = "pressure",
  ColorConsistency = "colorConsistency",
  NozzleCondition = "nozzleCondition",
}

// Enum for Assembly Line part names
export enum AssemblyLinePart {
  AlignmentAccuracy = "alignmentAccuracy",
  Speed = "speed",
  FittingTolerance = "fittingTolerance",
  BeltSpeed = "beltSpeed",
}

// Enum for Quality Control Station part names
export enum QualityControlStationPart {
  CameraCalibration = "cameraCalibration",
  LightIntensity = "lightIntensity",
  SoftwareVersion = "softwareVersion",
  CriteriaSettings = "criteriaSettings",
}
