'use client';

import { MonthlyExpense } from '~/src/app/shared/components/MonthlyExpense';
import { Profile } from '~/src/app/shared/components/Profile';
import { useCompanyInfo } from '~/src/app/shared/hooks/useCompanyInfo';
import { useDashboardController } from '../controller';
import { useCalculateTotalPrice } from '~/src/app/shared/hooks/useCalculateTotalPrice';
import { mockedProductCardContent } from '../../Productcards/ProductCardsUtils';
import { ColoredBanner } from '~/src/app/shared/components/ColoredBanner';
import { Graphics } from '~/src/app/shared/components/Graphics';
import * as tv from '../DashboardTV';

export function DashboardHeader() {
  const { isExpensesVisible, toggleExpenses } = useDashboardController();
  const { totalPrice } = useCalculateTotalPrice(mockedProductCardContent);
  const { company } = useCompanyInfo();

  return (
    <div className={tv.dashboardHeaderWrapperTv()}>
      <ColoredBanner color="#583ED3" />

      <div className={tv.dashboardHeaderProfileTv()}>
        <Profile.root>
          <Profile.avatar
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            companyName={company.name}
          />
          <Profile.info
            cnpj={company.cnpj}
            companyName={company.name.split(' ')[0]}
            companySegment="Cafeteria"
            corporateReason={company.corporateReason}
          />
        </Profile.root>
        <MonthlyExpense.root bgColor="transparent">
          <MonthlyExpense.header>
            <MonthlyExpense.title text="Média de pedidos da semana" />
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
      </div>

      <div className={tv.dashboardHeaderDailyProfitTv()}>
        <div className="w-full h-48">
          <Graphics.simpleAreaChart visibility="block" width="100%" isPressable />
        </div>
      </div>
    </div>
  );
}
