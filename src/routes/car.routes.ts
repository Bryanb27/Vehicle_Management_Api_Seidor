import { Router } from "express";
import { CarController } from "../controllers/car.controller";
import { CarService } from "../services/car.service";
import { carRepository } from "../container";

const router = Router();

const carService = new CarService(carRepository);
const carController = new CarController(carService);

router.post("/", carController.create);
router.get("/", carController.findAll);
router.get("/:id", carController.findById);
router.put("/:id", carController.update);
router.delete("/:id", carController.delete);

export default router;