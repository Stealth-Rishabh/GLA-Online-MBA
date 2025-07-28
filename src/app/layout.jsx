import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Online MBA | Flexible Learning | No Cost EMI | GLA Online MBA",
  description: "Transform your career with an Online MBA from GLA University. Flexible, comprehensive, and designed for real-world impact. Enroll now",
  icons: {
    icon: [{ url: "/favicon.png" }, { url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WSZX8D67');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSZX8D67"
            height="0" 
            width="0" 
            style={{display: "none", visibility: "hidden"}}
          />
        </noscript>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
