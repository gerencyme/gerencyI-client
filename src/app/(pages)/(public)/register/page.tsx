import { FAQComponent } from '~/src/app/features/FAQ';
import { Register } from '~/src/app/features/register';

export default function AuthPage() {
  return (
    <div className="w-screen h-screen flex flex-col min-[1520px]:flex-row max-[1520px]:items-center max-[1520px]:justify-center">
      <Register.root>
        <Register.header title="Saia do básico" subtitle="Eleve seu estabelecimento" />
        <Register.back text="Já saiu do básico?" textLink="Entre!" />
        <Register.form />
      </Register.root>
      <FAQComponent.FAQ />
    </div>
  );
}
