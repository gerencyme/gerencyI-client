import { Button } from '~/src/app/shared/components/Button';
import { ButtonContentWrapper } from '~/src/app/shared/components/Button/views/ButtonContentWrapper';
import { ProductsActionsRootTv } from '../ProductsTV';
import { Dispatch, SetStateAction } from 'react';

interface ProductsActionsProps {
  togglePress: () => void;
  setIsTable: Dispatch<SetStateAction<boolean>>;
}

export function ProductsActions({ setIsTable, togglePress }: ProductsActionsProps) {
  return (
    <div className={ProductsActionsRootTv()}>
      <Button.root
        onMouseDown={togglePress}
        onMouseUp={togglePress}
        onClick={() => setIsTable((prev: boolean) => !prev)}
      >
        <ButtonContentWrapper>
          <Button.label color="white" text="Mostrar caso de uso" />
        </ButtonContentWrapper>
      </Button.root>

      <Button.root color="secondary">
        <Button.link href="#more">
          <ButtonContentWrapper>
            <Button.label color="primary" text="Saber mais..." />
          </ButtonContentWrapper>
        </Button.link>
      </Button.root>
    </div>
  );
}
