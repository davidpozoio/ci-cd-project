import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import NotFound from "../errors/not-found-exception";
import InvalidUUID from "../errors/invalid-uuid-exception";

const globalErrorController = async (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (Array.isArray((err as any)?.errors)) {
    res.status(400).json({
      errors: err,
    });
    return;
  }

  if (err instanceof NotFound) {
    res.status(err.statusCode).json({
      message: err.message,
      code: err.code,
      statusCode: err.statusCode,
    });
    return;
  }

  if (err instanceof InvalidUUID) {
    res.status(err.statusCode).json({
      message: err.message,
      code: err.code,
      statusCode: err.statusCode,
    });
    return;
  }

  res.status(500).json({
    error: err,
  });
};

export default globalErrorController;
