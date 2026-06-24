import { CarRepository } from "./repositories/car.repository";
import { DriverRepository } from "./repositories/driver.repository";
import { CarUsageRepository } from "./repositories/car-usage.repository";

export const carRepository = new CarRepository();
export const driverRepository = new DriverRepository();
export const usageRepository = new CarUsageRepository();