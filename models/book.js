module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "books",
    {
      book_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      isbn: {
        type: DataTypes.STRING(100),
        default: null,
        allowNull: false,
        unique: true,
      },
      title: {
        type: DataTypes.STRING(100),
        default: null,
        allowNull: false,
      },
      auth_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        default: null,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
