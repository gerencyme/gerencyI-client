import { Productcards } from '../../features/Productcards';
import { Title } from '../../shared/components/Title';

export default function LastMonthsPage() {
  return (
    <div className="flex flex-col gap-4">
      <Title title="Página: Últimos meses" size="2xl" weight="black" color="white" />
      <Productcards.content />
    </div>
  );
}
