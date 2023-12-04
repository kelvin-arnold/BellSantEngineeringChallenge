import { Router } from "express";

const router = Router();

import {
  getMachineHealth,
  getMachineHistory,
  clearMachineHistory,
} from "../controllers/machineController";

router.post("/", getMachineHealth);

router.get("/", getMachineHistory);

router.post("/delete", clearMachineHistory);

export default router;
