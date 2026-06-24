import { CarRepository } from "./repositories/car.repository";
import { DriverRepository } from "./repositories/driver.repository";
import { CarUsageRepository } from "./repositories/car-usage.repository";

// Shared repository instances.
//
// Since the application uses in-memory storage,
// repositories must be shared across routes
// to preserve application state.
export const carRepository = new CarRepository();
export const driverRepository = new DriverRepository();
export const usageRepository = new CarUsageRepository();