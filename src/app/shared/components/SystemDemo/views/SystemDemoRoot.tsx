import { ReactNode } from 'react';

interface SystemDemoRootProps {
  children: ReactNode;
}

export function SystemDemoRoot({ children }: SystemDemoRootProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center m-auto w-full pb-4">
      {children}
    </div>
  );
}
