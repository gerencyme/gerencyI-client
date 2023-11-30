import { ReactNode } from 'react';

interface RequestTableRootProps {
  children: ReactNode;
  isAnimated?: boolean;
}

export function RequestTableRoot({ children }: RequestTableRootProps) {
  return (
    <div
      className="table w-full max-w-7xl h-full max-h-[560px] p-3 m-auto overflow-x-hidden overflow-y-auto bg-darkblue rounded-2xl

      delay-1000 transition-all duration-700

    "
    >
      <table>{children}</table>
    </div>
  );
}
