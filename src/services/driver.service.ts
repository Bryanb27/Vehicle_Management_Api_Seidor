import { v4 as uuidv4 } from "uuid";

import { Driver } from "../models/driver";
import { DriverRepository } from "../repositories/driver.repository";

export class DriverService {
    constructor(
        private driverRepository: DriverRepository
    ) {}

    create(name: string): Driver {
        const driver: Driver = {
            id: uuidv4(),
            name
        };

        this.driverRepository.save(driver);

        return driver;
    }

    findAll(name?: string): Driver[] {
        let drivers = this.driverRepository.findAll();

        if (name) {
            drivers = drivers.filter(
                driver =>
                    driver.name
                        .toLowerCase()
                        .includes(name.toLowerCase())
            );
        }

        return drivers;
    }

    findById(id: string): Driver {
        const driver =
            this.driverRepository.findById(id);

        if (!driver) {
            throw new Error("Driver not found");
        }

        return driver;
    }

    update(
        id: string,
        name: string
    ): Driver {
        const driver = this.findById(id);

        const updatedDriver: Driver = {
            ...driver,
            name
        };

        this.driverRepository.update(
            updatedDriver
        );

        return updatedDriver;
    }

    delete(id: string): void {
        this.findById(id);

        this.driverRepository.delete(id);
    }
}