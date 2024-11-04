import authDocs from "./src/routes/docs/authRoutesDocs";
import components from "./src/routes/docs/components";
import productDocs from "./src/routes/docs/productRoutesDocs";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API",
      version: "1.0.0",
      description: "Your API documentation",
    },
    paths: {
      ...authDocs,
      ...productDocs,
    },
    components: {
      ...components,
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/docs/*.ts"],
};

export default swaggerOptions;
