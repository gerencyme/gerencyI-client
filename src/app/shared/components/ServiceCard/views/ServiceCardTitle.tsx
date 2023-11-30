import { Title } from '../../Title';

interface ServiceCardTitleProps {
  title: string;
}

export function ServiceCardTitle({ title }: ServiceCardTitleProps) {
  return <Title as="h3" title={title} weigth="bold" color="secondary" />;
}
