import { CurrentService } from '../features/CurrentService';
import { FAQComponent } from '../features/FAQ';
import { SystemDemo } from '../features/SystemDemo';
import { Brightness } from '../shared/components/Brightness';
import { Button } from '../shared/components/Button';
import { Reflector } from '../shared/components/Reflector';
import { Section } from '../shared/components/Section';
import { Title } from '../shared/components/Title';
import * as tv from './pageTV';

export default function Home() {
  return (
    <div className={tv.homePageTv()}>
      <Title
        title="Não perca mais tempo com gerenciamento"
        weight="bold"
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
              <Button.label text="Consultar" color="white" weight="bold" size="lg" />
            </Button.link>
          </Button.contentWrapper>
        </Button.root>
      </div>
      <div className={tv.homePageSystemDemoTv()}>
        <SystemDemo.exemple />
      </div>
      <div className="sm:my-64" />
      <p className={tv.homePageSlogan()}>
        Nosso preço pensado em você, <span className={tv.homePageSecondarySloganTv()}>nosso</span>{' '}
        futuro cliente!
      </p>
      <Section id="service">
        <Brightness gradient={tv.homePageBrightnessTv()} />
        <div className={tv.homePageProductCardWrappetTv()}>
          <Reflector>
            <CurrentService.card />
          </Reflector>
          <CurrentService.card />
        </div>
      </Section>
      <Section id="FAQ">
        <FAQComponent.FAQ />
      </Section>
    </div>
  );
}
