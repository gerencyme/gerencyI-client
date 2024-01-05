import { ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { tableRootTv } from '../TableTV';

interface TableRootProps extends VariantProps<typeof tableRootTv> {
  children: ReactNode;
  isPressable: boolean;
}

export function TableRoot({ children, isPressable, state }: TableRootProps) {
  const isPreeableState: typeof state = isPressable ? 'isPressable' : 'notPressable';

  return <div className={tableRootTv({ state: isPreeableState })}>{children}</div>;
}
