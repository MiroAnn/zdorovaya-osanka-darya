import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zdorovaya-osanka-darya.ann-miro.chatgpt.site"),
  title: "Лендинг курса «Здоровая осанка»",
  description: "6 недель, после которых у вас вырастут крылья",
  openGraph: {
    title: "Лендинг курса «Здоровая осанка»",
    description: "6 недель, после которых у вас вырастут крылья",
    images: [{ url: "/og-healthy-posture.png", width: 1732, height: 909 }],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/112548668" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
