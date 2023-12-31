import { VariantProps } from 'tailwind-variants';
import { Tooltip } from '../../Tooltip';
import { productCardStatusTv, renderCancelTooltipContentTv } from '../ProductCardTV';
import { Text } from '../../Text';
import { Button } from '../../Button';
import { BsTrash } from 'react-icons/bs';

interface ProductCardStatusProps extends VariantProps<typeof productCardStatusTv> {
  handleCancel: () => void;
}

export function ProductCardStatus({ state, handleCancel }: ProductCardStatusProps) {
  const status = <div className={productCardStatusTv({ state })} />;

  const tooltipText = () => {
    if (state === 'underAnalysis') return '';

    return state === 'canceled' ? 'Pedido Cancelado' : 'Pedido Entregue';
  };

  const renderCancelTooltipContent = () => (
    <div className={renderCancelTooltipContentTv()}>
      <Text
        text="Este pedido está buscando por grupos para otimizar o preço para o seu negócio"
        className="leading-6 pb-1"
      />
      <Button.root size="small" color="error" onClick={handleCancel}>
        <Button.contentWrapper>
          <Button.icon icon={BsTrash} size="small" color="white" />
          <Button.label text="Cancelar Pedido" weight="bold" size="xs" color="white" />
        </Button.contentWrapper>
      </Button.root>
    </div>
  );

  const renderCancelTooltip = () => (
    <Tooltip
      color="white"
      isArrow={false}
      contentState="withoutContent"
      content={() => renderCancelTooltipContent()}
    >
      {status}
    </Tooltip>
  );

  return state === 'underAnalysis' ? (
    renderCancelTooltip()
  ) : (
    <Tooltip isArrow={false} color="white" text={tooltipText()}>
      {status}
    </Tooltip>
  );
}
