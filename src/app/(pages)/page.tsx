import { CurrentService } from '../features/CurrentService';
import { FAQComponent } from '../features/FAQ';
import { SystemDemo } from '../features/SystemDemo';
import { Brightness } from '../shared/components/Brightness';
import { Button } from '../shared/components/Button';
import { Section } from '../shared/components/Section';
import { Title } from '../shared/components/Title';
import * as tv from './pageTV';

export default function Home() {
  return (
    <div className={tv.homePageTv()}>
      <Title
        title="Não perca mais tempo com gerenciamento"
        color="white"
        weigth="bold"
        className={tv.homePageTitleTv()}
      />
      <p className={tv.homePageSubtitleTv()}>
        A <span className="text-secondary font-semiBold">GerencyI</span> cuida disso para você a
        partir de hoje!
      </p>
      <div className={tv.homePageGoToSectionButtonTv()}>
        <Button.root size="small">
          <Button.contentWrapper>
            <Button.link href="#service">
              <Button.label text="Consltar" color="white" weigth="bold" size="lg" />
            </Button.link>
          </Button.contentWrapper>
        </Button.root>
      </div>
      <div className={tv.homePageSystemDemoTv()}>
        <SystemDemo.exemple />
      </div>
      <div className="sm:my-64" />
      <p className={tv.homePageSlogan()}>
        Nosso preço pensado em você, <span className="text-secondary font-semiBold">nosso</span>{' '}
        futuro cliente!
      </p>
      <Section id="service">
        <Brightness gradient="bg-easy-brightness" />
        <CurrentService.card />
      </Section>
      <Section id="FAQ">
        <FAQComponent.FAQ />
      </Section>
    </div>
  );
}
