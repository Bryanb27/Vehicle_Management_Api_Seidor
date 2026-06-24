import express from "express";

import carRoutes from "./routes/car.routes";
import driverRoutes from "./routes/driver.routes";
import usageRoutes from "./routes/car-usage.routes";

import { errorHandler } from "./middlewares/error-handler";

const app = express();

app.use(express.json());

app.use("/cars", carRoutes);
app.use("/drivers", driverRoutes);
app.use("/usages", usageRoutes);

app.use(errorHandler);

export default app;