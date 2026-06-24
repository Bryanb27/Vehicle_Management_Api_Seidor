import { CarUsageService } from "../services/car-usage.service";

import { CarRepository } from "../repositories/car.repository";
import { DriverRepository } from "../repositories/driver.repository";
import { CarUsageRepository } from "../repositories/car-usage.repository";

import { CarService } from "../services/car.service";
import { DriverService } from "../services/driver.service";

describe("CarUsageService", () => {
    let usageService: CarUsageService;
    let carService: CarService;
    let driverService: DriverService;

    let carId: string;
    let driverId: string;

    beforeEach(() => {
        const carRepo = new CarRepository();
        const driverRepo = new DriverRepository();
        const usageRepo = new CarUsageRepository();

        carService = new CarService(carRepo);
        driverService = new DriverService(driverRepo);

        usageService = new CarUsageService(
            usageRepo,
            carRepo,
            driverRepo
        );

        const car = carService.create(
            "ABC1234",
            "Black",
            "Toyota"
        );

        const driver =
            driverService.create("Bryan");

        carId = car.id;
        driverId = driver.id;
    });

    it("should create usage", () => {
        const usage = usageService.create(
            carId,
            driverId,
            "Work"
        );

        expect(usage).toHaveProperty("id");
        expect(usage.reason).toBe("Work");
    });

    it("should NOT allow same car in use", () => {
        usageService.create(
            carId,
            driverId,
            "Work"
        );

        const newDriver =
            driverService.create("João");

        expect(() =>
            usageService.create(
                carId,
                newDriver.id,
                "Other"
            )
        ).toThrow("Car is already in use");
    });

    it("should finish usage", () => {
        const usage =
            usageService.create(
                carId,
                driverId,
                "Work"
            );

        const finished =
            usageService.finish(usage.id);

        expect(finished.endDate).toBeDefined();
    });
});