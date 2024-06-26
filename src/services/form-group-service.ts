import FormGroupRepository from "../respository/form-group/form-group-repository";
import SequelizeFormGroupRepository from "../respository/form-group/sequelize-form-group-repository";
import { FormGroup } from "../types/form-group";

export class FormGroupService extends FormGroupRepository {
  constructor(private readonly formGroupRepository: FormGroupRepository) {
    super();
  }

  async save(formGroup: FormGroup): Promise<FormGroup> {
    return this.formGroupRepository.save(formGroup);
  }
}

const formGroupService = new FormGroupService(
  new SequelizeFormGroupRepository()
);

export default formGroupService;
