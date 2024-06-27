import { FormScheme } from "../../types/form-scheme";
import Repository, { Where } from "../respository";

interface Limits {
  limit: number;
  offset: number;
}

export interface FormSchemeLimits {
  formSchemes: Limits;
  formGroups: Limits;
  fields: Limits;
}

export default class FormSchemeRepository extends Repository<FormScheme> {
  async findAll(
    where?: Where<FormScheme> | undefined,
    limits?: FormSchemeLimits
  ): Promise<FormScheme[]> {
    throw new Error("method not implemented");
  }
}
