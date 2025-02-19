import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: {
      template:"%s | 당근 마켓",
      default : "당근 마켓"
  },
  description: "모든 걸 사고 파세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-neutral-900 text-white max-w-screen-sm mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
