import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";
import { FormGroup } from "../types/form-group";
import FormSchemeModel from "./form-scheme-model";

const FormGroupModel = sequelize.define<Model<FormGroup>>(
  "formGroup",
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
    tableName: "form_group",
    modelName: "formGroup",
  }
);

FormGroupModel.belongsTo(FormSchemeModel);
FormSchemeModel.hasMany(FormGroupModel);

export default FormGroupModel;
