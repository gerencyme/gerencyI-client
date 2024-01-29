import { forwardRef } from 'react';

interface ForwardRefProps {}

export const DivObserver = forwardRef<HTMLDivElement, ForwardRefProps>(({ ...props }, tableRef) => (
  <div {...props} ref={tableRef} />
));

DivObserver.displayName = 'DivObserver';
