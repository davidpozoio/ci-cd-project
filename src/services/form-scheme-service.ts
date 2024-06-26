import NotFound from "../errors/not-found-exception";
import FormSchemeRepository from "../respository/form-scheme/form-scheme-repository";
import SequelizeFormSchemeRepository from "../respository/form-scheme/sequelize-form-scheme-repository";
import { FormScheme } from "../types/form-scheme";

export class FormSchemeService extends FormSchemeRepository {
  constructor(private readonly formSchemeRepository: FormSchemeRepository) {
    super();
  }

  async findAll(
    where?: Partial<FormScheme> | undefined
  ): Promise<FormScheme[]> {
    return this.formSchemeRepository.findAll(where);
  }

  async save(formScheme: FormScheme): Promise<FormScheme> {
    return this.formSchemeRepository.save(formScheme);
  }

  async findById(
    id: string,
    where?: Partial<FormScheme> | undefined
  ): Promise<FormScheme> {
    const formScheme = await this.formSchemeRepository.findById(id, where);
    if (!formScheme) {
      throw new NotFound("form scheme not found");
    }

    return formScheme;
  }

  getRepo() {
    return this.formSchemeRepository;
  }
}

const formSchemeService = new FormSchemeService(
  new SequelizeFormSchemeRepository()
);

export default formSchemeService;
