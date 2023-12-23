import { Text } from '~/src/app/shared/components/Text';
import { Title } from '~/src/app/shared/components/Title';
import { infos } from '../NewOrderUtils';

export function NewOrderInformation() {
  return (
    <div className="flex flex-col gap-2 md:gap-4 w-full max-w-xl">
      <Title
        as="h2"
        title="Como encontraremos o melhor preço para você?"
        size="lg"
        weight="bold"
        color="white"
      />

      {infos.map((info) => (
        <Text key={info.id} text={info.infoText} size="sm" weight="light" color="white" />
      ))}
    </div>
  );
}
