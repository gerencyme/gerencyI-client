import { Button } from '~/src/app/shared/components/Button';
import { Template } from '~shared/components/Template';
import { Text } from '~shared/components/Text';
import { FaCirclePlus } from 'react-icons/fa6';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';
import { lastMonthsFallbackTitleTv, lastMonthsFallbackTv } from '../LastMonthsTV';

export function LastMonthsFallback() {
  const href = APP_ROUTES.private['new-order'].name;

  return (
    <Template goBack direction="col" className={lastMonthsFallbackTv()}>
      <Text
        className={lastMonthsFallbackTitleTv()}
        weight="bold"
        text="Não encontramos nada na sua busca"
      />

      <Text text="Aproveite e faça um pedido agora mesmo!" weight="bold" className="text-center" />
      <Button.root>
        <Button.link href={href}>
          <Button.contentWrapper>
            <Button.icon icon={FaCirclePlus} color="white" />
            <Button.label text="Novo Pedido" weight="light" color="white" />
          </Button.contentWrapper>
        </Button.link>
      </Button.root>
    </Template>
  );
}
