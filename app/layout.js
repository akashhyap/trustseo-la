import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Config from "@/components/Config";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "TrustSEO",
  description: "TrustSEO",
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
});

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en" className={`${montserrat.variable}`}>
        <body>
          <Config/> 
          <main className="">{children}</main>
        </body>
      </html>
    </StoryblokProvider>
  );
}
