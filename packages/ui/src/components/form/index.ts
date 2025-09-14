import { FormBase } from './form-base'
import { FormGroup } from './form-group'
import { FormLabel } from './form-label'

type FormType = typeof FormBase & {
  Label: typeof FormLabel
  Group: typeof FormGroup
}

const Form = FormBase as FormType
Form.Label = FormLabel
Form.Group = FormGroup

export { Form }

