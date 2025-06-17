import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Vitrine Cogna',
    default: 'Vitrine Cogna - Transformando a educação',
  },
  description: 'Conheça os produtos e soluções da Cogna para transformar a educação.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
