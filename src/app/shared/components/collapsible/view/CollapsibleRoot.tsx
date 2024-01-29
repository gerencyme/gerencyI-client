import { ReactNode } from 'react';
import { collapsableRootTv } from '../CollapsableTV';
import { VariantProps } from 'tailwind-variants';

interface CollapsibleRootProps extends VariantProps<typeof collapsableRootTv> {
  children: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export function CollapsibleRoot({
  children,
  isOpen,
  collapsableState,
  toggle
}: CollapsibleRootProps) {
  const collapsableStates: typeof collapsableState = isOpen ? 'open' : 'close';

  return (
    <div
      data-testid="faq-item-toggle"
      onClick={toggle}
      className={collapsableRootTv({ collapsableState: collapsableStates })}
    >
      {children}
    </div>
  );
}
