import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";
import { Field, FieldComponent, FieldType } from "../types/field";
import FormGroupModel from "./form-group-model";

const FieldModel = sequelize.define<Model<Field>>(
  "field",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    component: {
      type: DataTypes.ENUM(...Object.keys(FieldComponent)),
    },
    type: {
      type: DataTypes.ENUM(...Object.keys(FieldType)),
    },
  },
  { tableName: "field", modelName: "field" }
);

FieldModel.belongsTo(FormGroupModel);
FormGroupModel.hasMany(FieldModel);

export default FieldModel;
