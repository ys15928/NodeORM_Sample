const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development"; // 개발용 환경 설정
const config = require("../config/config.json")[env]; // Sequelize 설정 파일
const db = {};

// Sequelize 인스턴스화
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Sequelize = Sequelize; // db객체에 Sequelize 패키지 넣기
db.sequelize = sequelize; // db객체에 Sequelize 인스턴스 넣기

db.Author = require("./author")(sequelize, Sequelize);
db.Book = require("./book")(sequelize, Sequelize);

db.Author.hasMany(db.Book, { foreignKey: "auth_id", sourceKey: "author_id" });

db.Book.belongsTo(db.Author, {
  foreignKey: "auth_id",
  targetKey: "author_id",
});

module.exports = db; // 모듈화
