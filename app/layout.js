import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./statemanage/context";
import Script from "next/script";
import dynamic from "next/dynamic";

const Wrapper = dynamic(() => import("@/app/wrapper/page"));

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Horse Fire Shilajit Resin",
  description: "Horse Fire Shilajit Resin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href={
          "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ceb064f4-e61b-4efb-01a7-0290dee4c600/public"
        }
      />

      <input type="hidden" value="arayurveda.shop" id="sellerDomain" />

      <script
        src="https://fastrr-boost-ui.pickrr.com/assets/js/channels/shopify.js"
        defer
      ></script>

      <link
        rel="stylesheet"
        href="https://fastrr-boost-ui.pickrr.com/assets/styles/shopify.css"
      ></link>

      {/* Analytics Code */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-8G0CLJEW21`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8G0CLJEW21');
                `}
      </Script>
      {/* Analytics Code */}

      {/* Google tag Manager code */}
      <Script strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MGZT3HDG')
                `}
      </Script>
      {/* Google tag Manager code */}

      <body className={inter.className}>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MGZT3HDG"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>

        <GlobalContextProvider>
          <Wrapper>{children}</Wrapper>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
