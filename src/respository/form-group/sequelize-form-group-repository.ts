import FormGroupModel from "../../model/form-group-model";
import { FormGroup } from "../../types/form-group";
import FormGroupRepository from "./form-group-repository";

export default class SequelizeFormGroupRepository extends FormGroupRepository {
  async findAll(where?: Partial<FormGroup> | undefined): Promise<FormGroup[]> {
    const formGroups = await FormGroupModel.findAll({ where });
    return formGroups.map((formGroup) => formGroup.get());
  }

  async save(formGroup: FormGroup): Promise<FormGroup> {
    formGroup.id = crypto.randomUUID();
    const createdFormGroup = await FormGroupModel.create(formGroup);

    return createdFormGroup.get();
  }
}
