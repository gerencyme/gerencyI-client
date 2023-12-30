import { Graphics } from '~/src/app/shared/components/Graphics';
import { SimilarCompanies } from '~/src/app/shared/components/SimilarCompanies';
import { similarCompaniesContent } from '../DashboardUtils';
import { Text } from '~/src/app/shared/components/Text';
import * as tv from '../DashboardTV';

export function DashboardGraphics() {
  return (
    <div className={tv.DashboardGraphicsWrapperTv()}>
      <div className={tv.DashboardGraphicsLeftSideTv()}>
        <Text text="Os mais vendidos no seu segmento" weight="light" size="md" color="white" />
        <div className={tv.DashboardGraphicsBestSellersTv()}>
          <Graphics.bestSellers bgColor="transparent" />
        </div>

        <Text text="Compare seus lucros com a GerencyI" weight="light" size="md" color="white" />
        <Graphics.areaChart bgColor="transparent" isPressable />
      </div>

      <SimilarCompanies.root className="hidden md:flex" bgColor="transparent">
        <SimilarCompanies.header
          text="Empresas Semelhantes"
          weight="bold"
          size="lg"
          className="text-md md:text-lg"
        />
        <SimilarCompanies.content similarCompanies={similarCompaniesContent} />
      </SimilarCompanies.root>
    </div>
  );
}
