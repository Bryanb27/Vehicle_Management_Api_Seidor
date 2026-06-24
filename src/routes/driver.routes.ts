import { Router } from "express";

import { DriverController } from "../controllers/driver.controller";
import { DriverService } from "../services/driver.service";
import { driverRepository } from "../container";

const router = Router();

const driverService = new DriverService(driverRepository);
const driverController = new DriverController(driverService);

router.post("/", driverController.create);
router.get("/", driverController.findAll);
router.get("/:id", driverController.findById);
router.put("/:id", driverController.update);
router.delete("/:id", driverController.delete);

export default router;