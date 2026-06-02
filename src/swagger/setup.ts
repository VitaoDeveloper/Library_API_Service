import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swagger_config from "./config";

const spec = swaggerJsdoc(swagger_config);

const swagger_serve = swaggerUi.serve;
const swagger_setup = swaggerUi.setup(spec, {
    explorer: true,
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Library API - Docs"
});

export { swagger_serve, swagger_setup, spec };
