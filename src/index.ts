import { createServer } from "./server/Core.js";
import trendRoutes from "./routes/trend.routes.js";

const Application = createServer({
  port: 4000,
  routers: [{ path: "/", router: trendRoutes }],
});

Application.init();
