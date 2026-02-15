import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
import BackToTop from '@/components/common/BackToTop';
// import { Quote } from '@/components/common/Quote';
import CanvasCursor from '@/components/common/CanvasCursor';
import ChatwayChat from '@/components/common/ChatwayChat';
import Footer from '@/components/common/Footer';
import GradientBackground from '@/components/common/GradientBackground';
import Navbar from '@/components/common/Navbar';
import PageLoader from '@/components/common/PageLoader';
import Providers from '@/components/common/Providers';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { ViewTransitions } from 'next-view-transitions';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  ...getMetadata('/'),
  icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`relative antialiased ${inter.className}`}>
          <Providers>
            {/* Custom page loader */}
            <PageLoader />
            <CanvasCursor />
            {/* Background positioned absolutely behind */}
            <div className="fixed inset-0 -z-10 min-h-full">
              <GradientBackground />
            </div>

            <Navbar />
            <Toaster position="top-right" />

            {/* Main content wrapper with fade-in */}
            <main className="relative">{children}</main>

            {/* <Quote /> disabled */}
            <Footer />
            <BackToTop />
            <UmamiAnalytics />
            <ChatwayChat />
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
