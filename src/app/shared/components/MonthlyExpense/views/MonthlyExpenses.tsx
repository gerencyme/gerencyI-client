import { formatPrice } from '~utils/transformers';
import { Text } from '../../Text';
import { MonthlyExpenseIconProps } from './MonthlyExpenseIcon';

interface MonthlyExpensesProps extends MonthlyExpenseIconProps {
  totalExpenses: number;
}

export function MonthlyExpenses({
  totalExpenses,
  isExpensesVisible,
  toggleExpenses
}: MonthlyExpensesProps) {
  const formatedPrice = formatPrice(totalExpenses);
  const total = isExpensesVisible ? formatedPrice : 'RS ****';

  return (
    <Text
      onClick={toggleExpenses}
      text={total}
      weight="light"
      color="white"
      className="cursor-default"
    />
  );
}
