'use client';

import { AboutService } from '~/src/app/shared/components/AboutService';
import GerencyIDataBase from '~assets/svg/GerencyIDataBase.svg';
import { useAboutServiceController } from '../controller';

export function AboutServiceContent() {
  const { isBigVisible, isMediumVisible, isSmallVisible, cards, Paper, Database } =
    useAboutServiceController();

  return (
    <AboutService.root>
      <AboutService.header
        title="Conecte-se à GerencyI, a rede pensada no seu negócio"
        subtitle="Economize com nossos dados agrupados e acompanhe seus lucros!"
      />
      <AboutService.hero
        src={GerencyIDataBase}
        alt="demonstração Gerency comunicando os pedidos dos clientes ao banco de dados"
      />
      <AboutService.footer>
        {cards.map((card, i) => (
          <div key={i} ref={card.ref}>
            <AboutService.blockIcon
              isBigVisible={card.isBigVisible}
              isMediumVisible={isMediumVisible}
              isSmallVisible={isSmallVisible}
              src={card.icon}
              blockSize={card.blockSize!}
            />
          </div>
        ))}
        <AboutService.infoCard
          side="left"
          isVisible={isBigVisible}
          text="Nós anotamos o seu pedido e juntamos à outros semelhantes"
          icon={Paper}
        />
        <AboutService.infoCard
          side="right"
          isVisible={isMediumVisible}
          text="Investigamos na base de dados e criamos um único pedido"
          icon={Database}
        />
        <AboutService.infoCard
          side="bottom"
          isVisible={isMediumVisible}
          text="Te entregamos o melhor custo benefício disponível na sua localidade"
        />
      </AboutService.footer>
    </AboutService.root>
  );
}
