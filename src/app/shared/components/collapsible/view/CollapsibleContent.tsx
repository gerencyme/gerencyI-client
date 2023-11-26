import { Text } from '../../Text';
import { collapsableContentTv } from '../CollapsableTV';

interface CollapsibleContentProps {
  text: string;
}

export function CollapsibleContent({ text }: CollapsibleContentProps) {
  return (
    <div className={collapsableContentTv()}>
      <Text text={text} color="white" size="sm" weigth="normal" />
    </div>
  );
}
