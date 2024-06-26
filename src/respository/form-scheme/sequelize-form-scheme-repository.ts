import FormGroupModel from "../../model/form-group-model";
import FormSchemeModel from "../../model/form-scheme-model";
import { FormScheme } from "../../types/form-scheme";
import FormSchemeRepository from "./form-scheme-repository";

export default class SequelizeFormSchemeRepository extends FormSchemeRepository {
  async findAll(
    where?: Partial<FormScheme> | undefined
  ): Promise<FormScheme[]> {
    const formSchemes = await FormSchemeModel.findAll({
      include: FormGroupModel,
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
