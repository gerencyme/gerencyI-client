import { Button } from '~/src/app/shared/components/Button';
import { Template } from '~shared/components/Template';
import { Text } from '~shared/components/Text';
import { FaCirclePlus } from 'react-icons/fa6';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';

export function LastMonthsFallback() {
  const href = APP_ROUTES.private['new-order'].name;

  return (
    <Template direction="col" className="justify-center items-center">
      <Text
        color="white"
        className="text-white font-bold text-lg md:text-xl text-center"
        weight="bold"
        text="Nenhum produto na sua lista..."
      />

      <Text text="Aproveite e faça um pedido agora mesmo!" color="white" weight="bold" />
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
