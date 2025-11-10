import { Server } from "./server/Server.js";
import trendRouter from "./routes/trend.routes.js";

const initializeApp = new Server();

(async () => {
  await initializeApp.iniRouter([trendRouter]);
  await initializeApp.bootstrap();
})();
