export interface CollapsableContent {
  id: number;
  title: string;
  text: string;
  isOpen: boolean;
  toggle: (item: CollapsableContent) => void;
}
