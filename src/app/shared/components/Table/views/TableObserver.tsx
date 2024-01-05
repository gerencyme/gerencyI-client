import { forwardRef } from 'react';

interface ForwardRefProps {}

export const TableObserver = forwardRef<HTMLDivElement, ForwardRefProps>(
  ({ ...props }, tableRef) => <div {...props} ref={tableRef} />
);

TableObserver.displayName = 'TableObserver';
