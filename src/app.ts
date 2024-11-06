import express from "express";
import AuthRouter from "./routes/authRoutes";
import ProductRouter from "./routes/productRoutes";
import ImageRouter from "./routes/imageRoute";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "../swaggerConfig";

const app = express();
const swaggerDoc = swaggerJSDoc(swaggerOptions);

app.use(express.json());

//auth-routes
app.use("/api/auth", AuthRouter);

//product-routes
app.use("/api/products", ProductRouter);

//upload-image
app.use("/api/cdn", ImageRouter);

// swagger-ui
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default app;
