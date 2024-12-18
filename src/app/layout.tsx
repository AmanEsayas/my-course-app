import './globals.css';

export const metadata = {
  title: 'My Course App',
  description: 'Manage your courses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
