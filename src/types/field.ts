export interface Field {
  id: string;
  type: FieldType;
  component: FieldComponent;
  label: string;
  formGroupId?: string;
}

export enum FieldComponent {
  select = "select",
  input = "input",
}
export enum FieldType {
  numeric = "number",
  characters = "string",
}
