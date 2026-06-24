import { Request, Response } from "express";
import { CarService } from "../services/car.service";

export class CarController {
    
    constructor(
        private carService: CarService
    ) {}

    create = (
        req: Request,
        res: Response
    ): void => {
        const { plate, color, brand } = req.body;

        if (!plate || !color || !brand) {
            res.status(400).json({
                message: "plate, color and brand are required"
            });
        }

        const car = this.carService.create(
            plate,
            color,
            brand
        );

        res.status(201).json(car);
    };

    findAll = (
        req: Request,
        res: Response
    ): void => {
        const { color, brand } = req.query;

        const cars = this.carService.findAll(
            color as string,
            brand as string
        );

        res.json(cars);
    };

    findById = (
        req: Request,
        res: Response
    ): void => {
        const car =
            this.carService.findById(
                req.params.id as string
            );

        res.json(car);
    };

    update = (
        req: Request,
        res: Response
    ): void => {
        const { plate, color, brand } =
            req.body;

        const car =
            this.carService.update(
                req.params.id as string,
                plate,
                color,
                brand
            );

        res.json(car);
    };

    delete = (
        req: Request,
        res: Response
    ): void => {
        this.carService.delete(
            req.params.id as string
        );

        res.sendStatus(204);
    };
}