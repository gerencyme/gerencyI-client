'use client';

import { useState } from 'react';
import { AnimatedTable } from '~/src/app/shared/animations/animatedTable';
import { ConnectBanner } from '~/src/app/shared/animations/connectBanner';
import { Button } from '~/src/app/shared/components/Button';
import { ButtonContentWrapper } from '~/src/app/shared/components/Button/views/ButtonContentWrapper';
import { ButtonLabel } from '~/src/app/shared/components/Button/views/ButtonLabel';

export default function AuthPage() {
  const [isTable, setIsTable] = useState(true);
  const [isPressable, setIsPressable] = useState(false);

  const togglePress = () => setIsPressable((prev) => !prev);

  return (
    <>
      <ConnectBanner />
      <p className="text-2xl font-bold text-white text-center">
        Nós <span className="text-secondary font-rosarivo">gerenciamos</span> sua empresa
      </p>
      <p className="text-xl font-bold text-white/75 text-center pb-8">
        E <span className="text-secondary/75 font-rosarivo">garantimos</span> sua lucrabilidade
      </p>
      <div className="w-fit pt-8 flex gap-4 flex-wrap m-auto items-center">
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
    </>
  );
}
