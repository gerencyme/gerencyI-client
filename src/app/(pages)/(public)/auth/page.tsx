import { Auth } from '~features/auth';

export default function AuthPage() {
  return (
    <Auth.root>
      <Auth.header title="Já Saiu do básico?" subtitle="Acesse seu dashboard " />
      <Auth.redirect text="Ainda não saiu do básico?" textLink="Registre-se!" />
      <Auth.forms />
    </Auth.root>
  );
}
