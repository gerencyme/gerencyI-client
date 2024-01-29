import { Text, TextProps } from '../../Text';

interface SimilarCompaniesHeaderProps extends TextProps {}

export function SimilarCompaniesHeader({ ...props }: SimilarCompaniesHeaderProps) {
  return <Text {...props} />;
}
