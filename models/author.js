module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "authors",
    {
      author_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
