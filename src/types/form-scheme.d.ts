import { FormGroup } from "./form-group";

export interface FormScheme {
  id: string;
  label: string;
  formGroups?: FormGroup[];
}
