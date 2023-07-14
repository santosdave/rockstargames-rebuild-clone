import '@/styles/globals.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import type { AppProps } from 'next/app'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast';

const progress = new ProgressBar({
  size: 4,
  color: "#fcaf17",
  className: "z-50",
  delay: 100,
});


Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
