'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
<button
  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
>
  {theme === 'dark' ? '☀️' : '🌙'}
</button>



  );
}
