// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'UNCSA Art Hub',
  description: 'Student Film Project Management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
