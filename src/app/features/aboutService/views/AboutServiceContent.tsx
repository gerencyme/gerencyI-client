'use client';

import { AboutService } from '~/src/app/shared/components/AboutService';
import GerencyIDataBase from '~assets/svg/GerencyIDataBase.svg';
import GerencyIDataBaseLight from '~assets/svg/GerencyIDataBaseLight.svg';
import { useAboutServiceController } from '../controller';
import { useTheme } from '~/src/app/shared/hooks/contexts/useTheme';

export function AboutServiceContent() {
  const { cards } = useAboutServiceController();
  const { theme } = useTheme();

  const src = theme === 'dark' ? GerencyIDataBase : GerencyIDataBaseLight;

  return (
    <AboutService.root>
      <AboutService.header
        title="Conecte-se à GerencyI, a rede pensada no seu negócio"
        subtitle="Economize com nossos dados agrupados e acompanhe seus lucros!"
      />
      <AboutService.hero
        src={src}
        alt="demonstração Gerency comunicando os pedidos dos clientes ao banco de dados"
      />
      <AboutService.footer>
        {cards.map((card) => (
          <div key={card.id} ref={card.ref}>
            <AboutService.blockIcon
              text={card.text}
              icon={card.icon}
              side={card.side}
              isBigVisible={card.isBigVisible}
              isMediumVisible={card.isMediumVisible}
              isSmallVisible={card.isSmallVisible}
              src={card.icon}
              blockSize={card.blockSize!}
            />
          </div>
        ))}
      </AboutService.footer>
    </AboutService.root>
  );
}
