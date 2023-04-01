import { AttributeType, DisplayType } from './CustomAttribute';

export interface CreateCustomAttributeDTO {
  number: string,
  name: string,
  attributeType: AttributeType,
  displayType: DisplayType,
  isDisabled: boolean,
  languages: Record<string, string>,
  remarks: string,
}
