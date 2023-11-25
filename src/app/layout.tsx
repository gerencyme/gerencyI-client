import '~global/styles/globals.css';
import '../global/styles/scrollbar.css';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <title>GerencyI</title>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
