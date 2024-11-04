import express from "express";
import AuthRouter from "./routes/authRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "../swaggerConfig";

const app = express();
const swaggerDoc = swaggerJSDoc(swaggerOptions);

app.use(express.json());

//auth-routes
app.use("/api/auth", AuthRouter);

// swagger-ui
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default app;
