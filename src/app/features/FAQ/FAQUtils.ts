import { FaqItem } from '../../FAQApi/FAQApiUtils';
import { CollapsableContent } from '../../shared/types';

export const transformData = (
  data: FaqItem[] | null,
  toggle: (item: CollapsableContent) => void,
  selecionedCollapsible: CollapsableContent | null
) =>
  data?.map((item) => ({
    id: item.id,
    text: item.text,
    title: item.title,
    selecionedCollapsible: selecionedCollapsible?.id === item.id,
    toggle,
    isOpen: false
  }));
