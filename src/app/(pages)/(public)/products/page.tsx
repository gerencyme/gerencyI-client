'use client';

import { useState } from 'react';
import { Section } from '~/src/app/shared/components/Section';
import { AnimatedTable } from '~features/animatedTable';
import { ConnectBanner } from '~shared/animations/connectBanner';
import { Button } from '~shared/components/Button';
import { ButtonContentWrapper } from '~shared/components/Button/views/ButtonContentWrapper';
import { ButtonLabel } from '~shared/components/Button/views/ButtonLabel';
import { AboutService } from '~/src/app/features/aboutService';

export default function AuthPage() {
  const [isTable, setIsTable] = useState(true);
  const [isPressable, setIsPressable] = useState(false);

  const togglePress = () => setIsPressable((prev) => !prev);

  const renderRosarivoText = (text: string) => (
    <span className="text-secondary font-rosarivo">{text}</span>
  );

  return (
    <>
      <ConnectBanner />
      <p className="text:lg sm:text-2xl font-bold text-white text-center">
        Nós {renderRosarivoText('gerenciamos')} sua empresa
      </p>
      <p className="text-md sm:text-xl font-bold text-white/75 text-center">
        E {renderRosarivoText('garantimos')} sua lucrabilidade
      </p>
      <p className="w-full max-w-xl m-auto text-white text-center font-light text-xs pt-4">
        Conectando-se à rede da {renderRosarivoText('GerencyI')}, nós podemos lhe ajudar a{' '}
        {renderRosarivoText('gerenciar')} seu estoque de forma eficiente e econômica. Focados em
        vocês, nossos {renderRosarivoText('clientes')}, temos como objetivo ajudar a reduzir seus
        custos de estoque, aumentar sua satisfação com seus clientes e melhorar sua competitividade.
      </p>
      <div className="w-fit pt-8 flex gap-4 flex-wrap m-auto items-center z-50">
        <Button.root
          onMouseDown={togglePress}
          onMouseUp={togglePress}
          onClick={() => setIsTable((prev) => !prev)}
        >
          <ButtonContentWrapper>
            <ButtonLabel color="white" text="Mostrar caso de uso" />
          </ButtonContentWrapper>
        </Button.root>

        <Button.root color="secondary">
          <ButtonContentWrapper>
            <Button.link href="#more">
              <ButtonLabel color="primary" text="Saber mais..." />
            </Button.link>
          </ButtonContentWrapper>
        </Button.root>
      </div>
      <AnimatedTable isPressable={isPressable} togglePress={togglePress} isTable={isTable} />
      <Section id="more">
        <AboutService.content />
      </Section>
    </>
  );
}
