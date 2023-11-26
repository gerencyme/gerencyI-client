import { AuthHeader } from './views/AuthHeader';
import { FormsComponent } from './views/FormsComponent';
import { AuthRedirectBack } from './views/AuthRedirectBack';
import { AuthRoot } from './views/AuthRoot';

export const Auth = {
  root: AuthRoot,
  forms: FormsComponent,
  header: AuthHeader,
  redirect: AuthRedirectBack
};
