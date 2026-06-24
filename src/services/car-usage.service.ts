import { v4 as uuidv4 } from "uuid";

import { CarUsage } from "../models/car-usage";

import { CarRepository }
    from "../repositories/car.repository";

import { DriverRepository }
    from "../repositories/driver.repository";

import { CarUsageRepository }
    from "../repositories/car-usage.repository";

export class CarUsageService {
    constructor(
        private usageRepository: CarUsageRepository,
        private carRepository: CarRepository,
        private driverRepository: DriverRepository
    ) {}

    create(
        carId: string,
        driverId: string,
        reason: string
    ): CarUsage {

        const car =
            this.carRepository.findById(carId);

        if (!car) {
            throw new Error("Car not found");
        }

        const driver =
            this.driverRepository.findById(
                driverId
            );

        if (!driver) {
            throw new Error("Driver not found");
        }

        const usages =
            this.usageRepository.findAll();

        const activeCarUsage =
            usages.find(
                usage =>
                    usage.carId === carId &&
                    !usage.endDate
            );

        if (activeCarUsage) {
            throw new Error(
                "Car is already in use"
            );
        }

        const activeDriverUsage =
            usages.find(
                usage =>
                    usage.driverId === driverId &&
                    !usage.endDate
            );

        if (activeDriverUsage) {
            throw new Error(
                "Driver is already using a car"
            );
        }

        const usage: CarUsage = {
            id: uuidv4(),
            carId,
            driverId,
            reason,
            startDate: new Date()
        };

        this.usageRepository.save(usage);

        return usage;
    }

    finish(id: string): CarUsage {
        const usage =
            this.usageRepository.findById(id);

        if (!usage) {
            throw new Error(
                "Usage not found"
            );
        }

        if (usage.endDate) {
            throw new Error(
                "Usage already finished"
            );
        }

        usage.endDate = new Date();

        this.usageRepository.update(
            usage
        );

        return usage;
    }

    findAll() {
        return this.usageRepository.findAll();
    }
}