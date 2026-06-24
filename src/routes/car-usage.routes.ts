import { Router } from "express";

import { CarUsageController } from "../controllers/car-usage.controller";
import { CarUsageService } from "../services/car-usage.service";

import { usageRepository,
         carRepository,
         driverRepository } from "../container";

const router = Router();

const usageService = new CarUsageService(
    usageRepository,
    carRepository,
    driverRepository
);

const usageController = new CarUsageController(
    usageService
);

router.post("/", usageController.create);
router.patch("/:id/finish", usageController.finish);
router.get("/", usageController.findAll);

export default router;