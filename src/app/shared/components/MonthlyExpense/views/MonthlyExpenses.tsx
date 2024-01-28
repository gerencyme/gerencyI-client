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
    <div onClick={toggleExpenses} className="flex items-center gap-0.5 cursor-pointer">
      <Text text="R$" className="mr-1" weight="light" color="white" />
      {arrayOfDivisor}
    </div>
  );

  const formatedPrice = formatPrice(totalExpenses);

  if (isExpensesVisible)
    return (
      <Text
        onClick={toggleExpenses}
        text={formatedPrice}
        weight="light"
        color="white"
        className="cursor-pointer"
      />
    );

  return securityExpense;
}
