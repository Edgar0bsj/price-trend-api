import express from "express";
import config from "../config/env.js";
import type { ServRouter } from "../interface/index.js";

export class Server {
  private app: express.Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = config.PORT;
  }

  async iniRouter(routers: ServRouter[]) {
    for (let index in routers) {
      if (routers[index])
        this.app.use(routers[index].path, routers[index].router);
    }
  }

  async bootstrap() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port -> ${this.port}`);
    });
  }
}
