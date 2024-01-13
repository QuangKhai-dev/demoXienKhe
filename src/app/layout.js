import { Roboto } from "next/font/google";
import "./globals.scss";
import { Providers } from "./provider";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Xiên Khè",
  description:
    "Cám ơn bạn ghé thăm Xiên Khè. NHẬU NGON MỒI XỊN. Hãy để chúng tôi phục vụ bạn 1 bữa ăn ngon - đẹp mắt nhất.",
  url: "https://www.xienkhe.com/",
  type: "website",
  name: "xienkhe.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
