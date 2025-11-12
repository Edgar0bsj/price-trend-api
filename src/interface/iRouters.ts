import type { Router } from "express";

export interface ServRouter {
  router: Router;
  path: string;
}
