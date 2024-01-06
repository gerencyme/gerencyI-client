import { formatPrice } from '~utils/transformers';
import { Text } from '../../Text';
import { MonthlyExpenseIconProps } from './MonthlyExpenseIcon';
import { CircularDivisor } from '../../CircularDivisor';

interface MonthlyExpensesProps extends MonthlyExpenseIconProps {
  totalExpenses: number;
}

export function MonthlyExpenses({
  totalExpenses,
  isExpensesVisible,
  toggleExpenses
}: MonthlyExpensesProps) {
  const arrayOfDivisor = Array.from({ length: 4 }).map((_, i) => <CircularDivisor key={i} />);

  const securityExpense = (
    <div className="flex items-center gap-0.5">
      <Text text="R$" className="mr-1" weight="light" color="white" />
      {arrayOfDivisor}
    </div>
  );

  const formatedPrice = formatPrice(totalExpenses);
  const total = isExpensesVisible ? formatedPrice : securityExpense;

  return (
    <Text
      onClick={toggleExpenses}
      text={total}
      weight="light"
      color="white"
      className="cursor-pointer"
    />
  );
}
