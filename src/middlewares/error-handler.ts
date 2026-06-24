import { Request, Response, NextFunction } from "express";

export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    return res.status(400).json({
        message: err.message || "Unexpected error"
    });
}