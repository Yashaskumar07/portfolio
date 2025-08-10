import "./globals.css";

import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="pt-20 max-w-7xl mx-auto px-6 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            {children}
          </main>
        
      </body>
    </html>
  );
}
