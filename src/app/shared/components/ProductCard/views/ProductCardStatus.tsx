import { VariantProps } from 'tailwind-variants';
import { Tooltip } from '../../Tooltip';
import { productCardStatusTv } from '../ProductCardTV';
import { Text } from '../../Text';
import { Button } from '../../Button';
import { BsTrash } from 'react-icons/bs';

interface ProductCardStatusProps extends VariantProps<typeof productCardStatusTv> {
  handleCancel: () => void;
}

export function ProductCardStatus({ state, handleCancel }: ProductCardStatusProps) {
  const content = <div className={productCardStatusTv({ state })} />;

  const tooltipText = () => {
    if (state === 'underAnalisis') return '';

    return state === 'canceled' ? 'Pedido Cancelado' : 'Pedido Entregue';
  };

  const renderCancelTooltipContent = () => (
    <div className="flex flex-col items-center justify-center">
      <Text
        text="Este pedido está buscando por grupos para otimizar o preço para o seu negócio"
        className="leading-7"
      />
      <Button.root size="small" color="error" onClick={handleCancel}>
        <Button.contentWrapper>
          <Button.icon icon={BsTrash} size="small" />
          <Button.label text="Cancelar Pedido" weight="bold" size="xs" color="white" />
        </Button.contentWrapper>
      </Button.root>
    </div>
  );

  const renderCancelTooltip = () => (
    <Tooltip color="white" text="asds" content={() => renderCancelTooltipContent()}>
      {content}
    </Tooltip>
  );

  return state === 'underAnalisis' ? (
    renderCancelTooltip()
  ) : (
    <Tooltip color="black" text={tooltipText()}>
      {content}
    </Tooltip>
  );
}
