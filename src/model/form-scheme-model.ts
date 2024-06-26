import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";
import { FormScheme } from "../types/form-scheme";

const FormSchemeModel = sequelize.define<Model<FormScheme>>(
  "formScheme",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: crypto.randomUUID(),
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "form_scheme",
    modelName: "formScheme",
  }
);

export default FormSchemeModel;
