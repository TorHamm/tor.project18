import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/Main";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "Frontend Mentor | Designo Agency Website Challenge",
  description: "Designo Agency Website Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='shortcut icon'
          href='/assets/favicon-32x32.png'
          type='image/x-icon'
        />
      </head>
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
