import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import ModalCart from "../components/ModalCart";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SNK App",
  description: "Pagina oficial de SNK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        <CartProvider>
          {children}
          <ModalCart />
        </CartProvider>
      </body>
    </html>
  );
}
