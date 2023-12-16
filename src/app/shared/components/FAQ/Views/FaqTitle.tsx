import { Title } from '../../Title';

interface FaqTitleProps {
  title?: string;
}

export function FaqTitle({ title }: FaqTitleProps) {
  return (
    <Title
      weight="black"
      title={title ?? 'FAQ'}
      as="h2"
      color="white"
      size="2xl"
      className="text-center"
    />
  );
}
