import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gia Lai Vigilant - Bảo Vệ Trái Tim Xanh",
  description: "Tổ chức phi lợi nhuận cam kết bảo tồn sự đa dạng sinh học và di sản thiên nhiên của cao nguyên Gia Lai qua những hành động thiết thực và công nghệ hiện đại.",
  keywords: ["Gia Lai", "Bảo tồn rừng", "Tây Nguyên", "Trái Tim Xanh", "Môi trường", "Việt Nam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="light scroll-smooth">
      <body className="bg-background text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}
