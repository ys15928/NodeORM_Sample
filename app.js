const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");

const { swaggerUi, specs } = require("./modules/swagger");
const { sequelize } = require("./models/model");
const indexRouter = require("./routes/index");

const app = express();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/books", require("./routes/books"));
app.use("/authors", require("./routes/authors"));

// http listen port 생성 서버 실행
https: app.listen(3000, () => console.log("server Connected, port:3000"));
