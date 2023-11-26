import { ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Meses Passados</title>
      {children}
    </>
  );
}
