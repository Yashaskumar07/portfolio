import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./contetxt/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="pt-20 max-w-7xl mx-auto px-6 dark:bg-gray-900 min-h-screen transition-colors duration-300">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
