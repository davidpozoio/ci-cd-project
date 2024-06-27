import { Op } from "sequelize";
import FormGroupModel from "../../model/form-group-model";
import FormSchemeModel from "../../model/form-scheme-model";
import { FormScheme } from "../../types/form-scheme";
import { Where, WhereOperator } from "../respository";
import FormSchemeRepository, {
  FormSchemeLimits,
} from "./form-scheme-repository";
import convertWhereToSequelize from "../../utils/convert-where-to-sequelize";

export default class SequelizeFormSchemeRepository extends FormSchemeRepository {
  async findAll(
    where?: Where<FormScheme> | undefined,
    limits?: FormSchemeLimits
  ): Promise<FormScheme[]> {
    const whereSequelize = convertWhereToSequelize(where);
    const formSchemes = await FormSchemeModel.findAll({
      include: {
        model: FormGroupModel,
        limit: 2,
      },
      where: { ...whereSequelize },
    });
    return formSchemes.map((formScheme) => formScheme.get());
  }

  async save(formScheme: FormScheme): Promise<FormScheme> {
    formScheme.id = crypto.randomUUID();
    const createdFormScheme = await FormSchemeModel.create(formScheme);
    return createdFormScheme.get();
  }

  async findById(
    id: string,
    where?: Partial<FormScheme> | undefined
  ): Promise<FormScheme | undefined> {
    const formScheme = await FormSchemeModel.findOne({ where: { id } });

    if (!formScheme?.get()) {
      return undefined;
    }

    return formScheme.get();
  }
}
