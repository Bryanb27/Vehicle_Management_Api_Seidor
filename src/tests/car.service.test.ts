import { CarService } from "../services/car.service";
import { CarRepository } from "../repositories/car.repository";

describe("CarService", () => {
    let carService: CarService;

    beforeEach(() => {
        carService = new CarService(
            new CarRepository()
        );
    });

    it("should create a car", () => {
        const car = carService.create(
            "ABC1234",
            "Black",
            "Toyota"
        );

        expect(car).toHaveProperty("id");
        expect(car.plate).toBe("ABC1234");
    });

    it("should list cars", () => {
        carService.create(
            "ABC1234",
            "Black",
            "Toyota"
        );

        const cars = carService.findAll();

        expect(cars.length).toBe(1);
    });

    it("should filter by color", () => {
        carService.create(
            "ABC1234",
            "Black",
            "Toyota"
        );

        carService.create(
            "XYZ9999",
            "White",
            "Honda"
        );

        const filtered =
            carService.findAll("Black");

        expect(filtered.length).toBe(1);
    });
});