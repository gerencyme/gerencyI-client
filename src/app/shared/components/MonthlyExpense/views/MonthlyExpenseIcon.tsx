import { Icon } from '../../Icon';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

export interface MonthlyExpenseIconProps {
  isExpensesVisible: boolean;
  toggleExpenses: () => void;
}

export function MonthlyExpenseIcon({ isExpensesVisible, toggleExpenses }: MonthlyExpenseIconProps) {
  const icon = isExpensesVisible ? FaEye : FaEyeSlash;
  const tooltipText = isExpensesVisible ? 'Visualizando depsesas' : 'Escondendo despesas';

  return (
    <Icon
      icon={icon}
      tooltip
      tooltipText={tooltipText}
      color="white"
      size="medium"
      onClick={toggleExpenses}
    />
  );
}
