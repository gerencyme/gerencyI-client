import { Icon } from '../Icon';
import { ErrorMessage } from './views/ErrorMessage';
import { IconRepresentation } from './views/IconRepresentation';
import { InputField } from './views/InputField';
import { InputLabel } from './views/InputLabel';
import { InputRoot } from './views/InputRoot';

export const Input = {
  root: InputRoot,
  label: InputLabel,
  field: InputField,
  representation: IconRepresentation,
  icon: Icon,
  error: ErrorMessage
};
