'use client';

import * as tv from '../DashboardTV';
import { useDashboardController } from '../controller';
import { mockedProductCardContent } from '../../Productcards/ProductCardsUtils';
import { MonthlyExpense } from '~shared/components/MonthlyExpense';
import { Profile } from '~shared/components/Profile';
import { useCompanyInfo } from '~hooks/useCompanyInfo';
import { useCalculateTotalPrice } from '~hooks/useCalculateTotalPrice';
import { ColoredBanner } from '~shared/components/ColoredBanner';
import { Graphics } from '~shared/components/Graphics';
import { useUploadImage } from '~hooks/contexts/useUploadImage';

export function DashboardHeader() {
  const { preview } = useUploadImage();
  const { isExpensesVisible, toggleExpenses } = useDashboardController();
  const { totalPrice } = useCalculateTotalPrice(mockedProductCardContent);
  const { company } = useCompanyInfo();

  const base64Image = `data:image/png;base64,${company?.companyImg}`;

  const companyimg = preview !== '' ? preview : base64Image;

  return (
    <div className={tv.dashboardHeaderWrapperTv()}>
      <ColoredBanner color="#583ED3" />

      <div className={tv.dashboardHeaderProfileTv()}>
        <Profile.root>
          <Profile.avatar src={companyimg} companyName={company?.name} />
          <Profile.info
            cnpj={company?.cnpj}
            companySegment="Cafeteria"
            corporateReason={company?.corporateReason}
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
