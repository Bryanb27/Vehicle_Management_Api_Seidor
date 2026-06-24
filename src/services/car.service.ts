import { v4 as uuidv4 } from "uuid";

import { Car } from "../models/car";
import { CarRepository } from "../repositories/car.repository";

export class CarService {
    constructor(
        private carRepository: CarRepository
    ) {}

    create(
        plate: string,
        color: string,
        brand: string
    ): Car {
        const car: Car = {
            id: uuidv4(),
            plate,
            color,
            brand
        };

        this.carRepository.save(car);

        return car;
    }

    findAll(
        color?: string,
        brand?: string
    ): Car[] {
        let cars = this.carRepository.findAll();

        if (color) {
            cars = cars.filter(
                car =>
                    car.color.toLowerCase() ===
                    color.toLowerCase()
            );
        }

        if (brand) {
            cars = cars.filter(
                car =>
                    car.brand.toLowerCase() ===
                    brand.toLowerCase()
            );
        }

        return cars;
    }

    findById(id: string): Car {
        const car = this.carRepository.findById(id);

        if (!car) {
            throw new Error("Car not found");
        }

        return car;
    }

    update(
        id: string,
        plate: string,
        color: string,
        brand: string
    ): Car {
        const car = this.findById(id);

        const updatedCar: Car = {
            ...car,
            plate,
            color,
            brand
        };

        this.carRepository.update(updatedCar);

        return updatedCar;
    }

    delete(id: string): void {
        this.findById(id);

        this.carRepository.delete(id);
    }
}