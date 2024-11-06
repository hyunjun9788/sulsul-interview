import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { HeaderNav } from '@/widgets/headerNav';
import '../src/app/globals.css';

const pretendard = localFont({
  src: '../src/app/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '술술 | AI 면접 질문 예측부터 기출 100선까지',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${pretendard.variable}`} lang="en">
      <body>
        {children}
        <HeaderNav />
      </body>
    </html>
  );
}
