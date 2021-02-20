import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export class Location extends Model {}

Location.init(
  {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  },
  {
    modelName: "location",
    sequelize,
  }
);
