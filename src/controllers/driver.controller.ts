import { Request, Response } from "express";
import { DriverService } from "../services/driver.service";

export class DriverController {
    constructor(
        private driverService: DriverService
    ) {}

    create = (
        req: Request,
        res: Response
    ): void => {
        const { name } = req.body;

        const driver =
            this.driverService.create(name);

        res.status(201).json(driver);
    };

    findAll = (
        req: Request,
        res: Response
    ): void => {
        const { name } = req.query;

        const drivers =
            this.driverService.findAll(
                name as string
            );

        res.json(drivers);
    };

    findById = (
        req: Request,
        res: Response
    ): void => {
        const driver =
            this.driverService.findById(
                req.params.id as string
            );

        res.json(driver);
    };

    update = (
        req: Request,
        res: Response
    ): void => {
        const { name } = req.body;

        const driver =
            this.driverService.update(
                req.params.id as string,
                name
            );

        res.json(driver);
    };

    delete = (
        req: Request,
        res: Response
    ): void => {
        this.driverService.delete(
            req.params.id as string
        );

        res.sendStatus(204);
    };
}