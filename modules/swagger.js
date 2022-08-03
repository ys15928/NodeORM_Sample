const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js ORM TEST",
      version: "1.0.0",
      description: "작성자 : 신윤수",
    },
    host: "localhost:3000",
    basePath: "/",
  },
  apis: ["./routes/*.js", "./modules/*"],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
