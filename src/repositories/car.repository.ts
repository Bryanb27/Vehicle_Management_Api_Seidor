import { Car } from "../models/car";

export class CarRepository {
    private cars: Car[] = [];

    findAll(): Car[] {
        return this.cars;
    }

    findById(id: string): Car | undefined {
        return this.cars.find(car => car.id === id);
    }

    save(car: Car): void {
        this.cars.push(car);
    }

    update(car: Car): void {
        const index = this.cars.findIndex(c => c.id === car.id);

        if (index !== -1) {
            this.cars[index] = car;
        }
    }

    delete(id: string): void {
        this.cars = this.cars.filter(car => car.id !== id);
    }
}