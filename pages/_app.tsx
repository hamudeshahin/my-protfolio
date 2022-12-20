import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Chivo_Mono } from "@next/font/google";
import MainLayout from "../layout/main-layout";

// config font
const ChivoMono = Chivo_Mono({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={ChivoMono.className}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}

export default MyApp;
