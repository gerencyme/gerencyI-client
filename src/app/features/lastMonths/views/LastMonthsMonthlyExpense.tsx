import { MonthlyExpense } from '~/src/app/shared/components/MonthlyExpense';
import { MonthlyExpenseIconProps } from '~/src/app/shared/components/MonthlyExpense/views/MonthlyExpenseIcon';

interface LastMonthsMonthlyExpenseProps extends MonthlyExpenseIconProps {
  translatedSelectedStatus: string;
  totalPrice: number;
  currentMonthFilter: string;
}

export function LastMonthsMonthlyExpense({
  translatedSelectedStatus,
  currentMonthFilter,
  isExpensesVisible,
  totalPrice,
  toggleExpenses
}: LastMonthsMonthlyExpenseProps) {
  const title =
    translatedSelectedStatus === 'todos os Status'
      ? `Gasto no mês de ${currentMonthFilter}`
      : `Gastos com pedidos ${translatedSelectedStatus}s em ${currentMonthFilter}`;

  return (
    <MonthlyExpense.root>
      <MonthlyExpense.header>
        <MonthlyExpense.title text={title} />
        <MonthlyExpense.icon
          toggleExpenses={toggleExpenses}
          isExpensesVisible={isExpensesVisible}
        />
      </MonthlyExpense.header>
      <MonthlyExpense.expenses
        toggleExpenses={toggleExpenses}
        isExpensesVisible={isExpensesVisible}
        totalExpenses={totalPrice}
      />
    </MonthlyExpense.root>
  );
}
