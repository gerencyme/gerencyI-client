import { Text, TextProps } from '../../Text';
import { monthlyExpenseTitleTv } from '../MonthlyExpenseTV';

interface MonthlyExpenseTitleProps extends TextProps {}

export function MonthlyExpenseTitle({ text }: MonthlyExpenseTitleProps) {
  return <Text text={text} color="white" weight="light" className={monthlyExpenseTitleTv()} />;
}
