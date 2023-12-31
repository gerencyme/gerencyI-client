import { SimilarCompanies } from '../../SimilarCompanies';
import { SimilarCompaniesContentProps } from '../../SimilarCompanies/views/SimilarCompaniesContent';
import { Text } from '../../Text';

interface ProductCardSimiliarCompaniesProps extends SimilarCompaniesContentProps {}

export function ProductCardSimiliarCompanies({
  similarCompanies = []
}: ProductCardSimiliarCompaniesProps) {
  return (
    <SimilarCompanies.root>
      <SimilarCompanies.header
        text={similarCompanies?.length ? 'Empresas parceiras neste pedido' : ''}
        weight="light"
        size="md"
        color="white"
      />
      {similarCompanies?.length ? (
        <SimilarCompanies.content similarCompanies={similarCompanies} />
      ) : (
        <Text text="Procurando por empresas parceiras..." size="xs" color="white" weight="normal" />
      )}
    </SimilarCompanies.root>
  );
}
