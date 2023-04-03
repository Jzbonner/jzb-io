import Head from 'next/head';
import { HOME_OG_LOGO } from '../../lib/constants';

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Jarrett Z. Bonner | Portfolio and Blog`}
      />
      <meta property="og:image" content={HOME_OG_LOGO} />
    </Head>
  );
}
