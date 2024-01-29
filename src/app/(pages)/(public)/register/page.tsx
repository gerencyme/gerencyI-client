import { FAQComponent } from '~/src/app/features/FAQ';
import { Register } from '~/src/app/features/register';
import { registerTv } from './RegisterTV';

export default function RegisterPage() {
  return (
    <div className={registerTv()}>
      <Register.root>
        <Register.header title="Saia do básico" subtitle="Eleve seu estabelecimento" />
        <Register.back text="Já saiu do básico?" textLink="Entre!" />
        <Register.forms />
      </Register.root>
      <FAQComponent.FAQ />
    </div>
  );
}
