import { Roboto } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Abu Sayed | Portfolio",
  description: "portfolio website for abu sayed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${roboto.className} overflow-x-hidden`}>
        <div className="portfolio bg-white dark:bg-theme">
          <Navbar />
          <div className="main-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
