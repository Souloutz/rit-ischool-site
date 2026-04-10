import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/app/hooks/useTheme";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import { roboto } from "./fonts";
import NavLinks from "@/components/NavLinks";
import TopBanner from "@/components/TopBanner";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

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
          className={`${roboto.variable} antialiased`}
        >
          <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-white">
            <TopBanner />
            <MainHeader />
            <NavLinks />

            <main className="flex flex-1 flex-col relative w-full overflow-hidden">
              <div className="w-full flex-1">
                {children}
              </div>
            </main>

            <Footer />

            <div className="fixed bottom-4 right-4 z-50">
              <ToggleThemeButton />
            </div>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
