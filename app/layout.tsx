import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/app/hooks/useTheme";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import { roboto } from "./fonts";
import NavLinks from "@/components/NavLinks";
import TopBanner from "@/components/TopBanner";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ModalProvider from "@/app/hooks/useModal";

export const metadata: Metadata = {
  title: "iSchool Website",
  description: "ISTE-340 React Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${roboto.className} ${roboto.variable} antialiased`}
        >
          <ModalProvider>
            <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-white">
              <ScrollProgress />
              <TopBanner />
              <MainHeader />
              <NavLinks />

              <main className="flex flex-1 flex-col relative w-full">
                <div className="w-full flex-1">
                  {children}
                </div>
              </main>

              <Footer />

              <div className="fixed bottom-4 right-4 z-50">
                <ToggleThemeButton />
              </div>
            </div>
          </ModalProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
