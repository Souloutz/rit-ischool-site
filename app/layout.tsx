import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/app/hooks/useTheme";
import ToggleThemeButton from "@/app/ui/ToggleThemeButton";
import { inter } from "./fonts";
import NavLinks from "./ui/NavLinks";
import { Copyright } from "lucide-react";

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
          className={`${inter.variable} antialiased`}
        >
          <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-zinc-100 selection:bg-[#F76902] selection:text-white font-sans flex flex-col md:flex-row overflow-hidden">
            <NavLinks />
            <main className="flex-1 h-screen overflow-y-auto relative scroll-smooth bg-opacity-50 dark:bg-zinc-950 dark:bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
              <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
                <div className="flex-1 h-full">
                  {children}
                </div>
              </div>
            </main>

            {/* Mobile Footer */}
            <footer className="md:hidden flex flex-row justify-center items-center gap-1 border-t p-6 text-center text-xs bg-indigo-50 text-zinc-600 dark:text-zinc-400 mt-auto dark:border-zinc-900 dark:bg-zinc-900">
              <p className="flex flex-row items-center gap-1"><Copyright width={16}/> {new Date().getFullYear()}</p>
              <p>RIT GCCIS School of Information</p>
            </footer>
          </div>

          <div className="absolute bottom-6 right-6 z-50">
            <ToggleThemeButton />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
