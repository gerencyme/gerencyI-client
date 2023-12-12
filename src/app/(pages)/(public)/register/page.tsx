import { FAQComponent } from '~/src/app/features/FAQ';
import { Register } from '~/src/app/features/register';

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-[1520px]:flex-row max-[1520px]:items-center max-[1520px]:justify-center relative animate-opacityOn">
      <Register.root>
        <Register.header title="Saia do básico" subtitle="Eleve seu estabelecimento" />
        <Register.back text="Já saiu do básico?" textLink="Entre!" />
        <Register.forms />
      </Register.root>
      <FAQComponent.FAQ />
    </div>
  );
}
