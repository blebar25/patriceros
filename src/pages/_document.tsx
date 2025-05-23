import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <meta name="theme-color" content="#2C3E50" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
