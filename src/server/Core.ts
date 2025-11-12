import express, { type Router, type Application } from "express";
import config from "../config/env.js";

//===========================================
//	interface
//===========================================
interface ServerOptions {
  port?: number;
  middlewares?: [];
  routers?: useRouters[];
  defaultMiddlewares?: boolean;
}
interface useRouters {
  path: string;
  router: Router;
}
//===========================================
//	class - objeto
//===========================================
class BaseServer {
  //	Att
  private app: Application;
  private port: number;
  private isInitialized: boolean = false;

  //	Setando att
  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.isInitialized = false;
  }

  //	Middlewares
  public useDefaultMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  public useMiddlewares(middlewares: []): void {
    for (const middleware of middlewares) {
      this.app.use(middleware);
    }
  }

  //	Router
  public useRouters(routers: useRouters[]) {
    for (const router of routers) {
      if (router && router.path && router.router) {
        this.app.use(router.path, router.router);
      }
    }
  }

  public async init(): Promise<void> {
    if (this.isInitialized) {
      throw new Error("O servidor já foi inicializado.");
    }

    return new Promise<void>((resolve) => {
      this.app.listen(this.port, () => {
        this.isInitialized = true;
        console.log(`Servidor rodando na porta -> ${this.port}`);
        resolve();
      });
    });
  }
}
//===========================================
//	factory
//===========================================

export function createServer(options: ServerOptions = {}) {
  //	Instanciando e buildando
  const port = options.port || config.PORT;
  const app = new BaseServer(port);

  //	Options
  if (options.defaultMiddlewares && options.defaultMiddlewares != true) {
    app.useDefaultMiddlewares();
  }

  if (options.middlewares && options.middlewares.length > 0) {
    app.useMiddlewares(options.middlewares);
  }

  if (options.routers && options.routers.length > 0) {
    app.useRouters(options.routers);
  }

  return app;
}
