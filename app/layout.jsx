import Footer from '@/components/Footer';
import Header from '@/components/Navbar';
import { Inter } from '@next/font/google';
import './globals.css';

const inter = Inter({ variable: '--display-font' });

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable}`}>
  
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
