import { Driver } from "../models/driver";

export class DriverRepository {
    private drivers: Driver[] = [];

    findAll(): Driver[] {
        return this.drivers;
    }

    findById(id: string): Driver | undefined {
        return this.drivers.find(driver => driver.id === id);
    }

    save(driver: Driver): void {
        this.drivers.push(driver);
    }

    update(driver: Driver): void {
        const index = this.drivers.findIndex(d => d.id === driver.id);

        if (index !== -1) {
            this.drivers[index] = driver;
        }
    }

    delete(id: string): void {
        this.drivers = this.drivers.filter(driver => driver.id !== id);
    }
}