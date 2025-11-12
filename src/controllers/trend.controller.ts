import type { Request, Response, NextFunction } from "express";

//===========================================
//	getPriceTrend
//===========================================
export const getPriceTrend = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("esta rodando né!");
};
