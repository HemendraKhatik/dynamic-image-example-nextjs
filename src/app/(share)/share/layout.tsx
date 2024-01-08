import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Mistletoe and Missing You | Suno</title>
        <meta
          name="description"
          content="pop acoustic song. Listen and make your own with Suno."
        />
        <meta property="og:title" content="Mistletoe and Missing You | Suno" />
        <meta
          property="og:description"
          content="pop acoustic song. Listen and make your own with Suno."
        />
        <meta
          property="og:image"
          content="https://cdn1.suno.ai/image_d707b5db-3369-4808-bdcd-83ee056e4407.png"
        />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:video:url"
          content="https://cdn1.suno.ai/5357415b-a202-4798-af1b-3bea6e8939bd.mp4"
        />
        <meta property="og:video:type" content="video/mp4" />
        <meta
          property="og:audio"
          content="https://cdn1.suno.ai/5357415b-a202-4798-af1b-3bea6e8939bd.mp3"
        />
        <meta property="og:type" content="music.song" />
        <meta name="twitter:card" content="player" />
        <meta name="twitter:site" content="@suno_ai_" />
        <meta name="twitter:title" content="Mistletoe and Missing You | Suno" />
        <meta
          name="twitter:description"
          content="pop acoustic song. Listen and make your own with Suno."
        />
        <meta
          name="twitter:image"
          content="https://cdn1.suno.ai/image_large_d707b5db-3369-4808-bdcd-83ee056e4407.png"
        />
        <meta
          name="twitter:image"
          content="https://cdn1.suno.ai/image_d707b5db-3369-4808-bdcd-83ee056e4407.png"
        />
        <meta
          name="twitter:player"
          content="https://app.suno.ai/embed/5357415b-a202-4798-af1b-3bea6e8939bd/"
        />
        <meta
          name="twitter:player:stream"
          content="https://cdn1.suno.ai/5357415b-a202-4798-af1b-3bea6e8939bd.mp3"
        />
        <meta name="twitter:player:width" content="760" />
        <meta name="twitter:player:height" content="240" />
        <meta name="next-size-adjust" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
