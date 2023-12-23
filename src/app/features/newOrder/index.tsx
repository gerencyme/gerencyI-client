import { ColorIdentity } from './views/ColorIdentity';
import { HalfContainer } from './views/HalfContainer';
import { NewOrderAction } from './views/NewOrderAction';
import { NewOrderDraft } from './views/NewOrderDraft';
import { NewOrderForm } from './views/NewOrderForm';
import { NewOrderInformation } from './views/NewOrderInformation';
import { NewOrderRoot } from './views/NewOrderRoot';
import { ShowLocationGuide } from './views/ShowLocationGuide';

export const NewOrder = {
  root: NewOrderRoot,
  form: NewOrderForm,
  action: NewOrderAction,
  locationGuide: ShowLocationGuide,
  HalfContainer,
  ColorIdentity,
  draftMode: NewOrderDraft,
  information: NewOrderInformation
};
