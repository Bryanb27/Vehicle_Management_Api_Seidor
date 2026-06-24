import { Request, Response } from "express";
import { CarUsageService } from "../services/car-usage.service";

export class CarUsageController {
    constructor(
        private usageService: CarUsageService
    ) {}

    create = (
        req: Request,
        res: Response
    ): void => {
        const {
            carId,
            driverId,
            reason
        } = req.body;

        const usage =
            this.usageService.create(
                carId,
                driverId,
                reason
            );

        res.status(201).json(usage);
    };

    finish = (
        req: Request,
        res: Response
    ): void => {
        const usage =
            this.usageService.finish(
                req.params.id as string
            );

        res.json(usage);
    };

    findAll = (
        req: Request,
        res: Response
    ): void => {
        const usages =
            this.usageService.findAll();

        res.json(usages);
    };
}