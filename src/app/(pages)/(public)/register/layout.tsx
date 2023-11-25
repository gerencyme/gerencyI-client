import { ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Registre-se</title>
      <main className="w-screen h-screen bg-gradient-hero relative">{children}</main>
    </>
  );
}
