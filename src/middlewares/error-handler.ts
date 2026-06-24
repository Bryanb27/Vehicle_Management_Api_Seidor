import { Request, Response, NextFunction } from "express";

// Global error handling middleware.
//
// Centralizes error responses and prevents
// application crashes caused by unhandled exceptions.
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