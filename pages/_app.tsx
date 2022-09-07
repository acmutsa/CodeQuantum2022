import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, createEmotionCache } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import theme from '../data/mantineThemeOverride';

const eCache = createEmotionCache({ key: 'mantine' });

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>CodeQuantum 2022</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/images/CQ_Logo_2022.svg" />
        <meta
          name="description"
          content="CodeQuantum is San Antonio’s first 24-hour hackathon geared towards marginalized genders to promote inclusivity and diversity!"
        />
        <meta
          name="keywords"
          content="hackathon, coding, computer science, utsa, college, marginalized genders"
        />
        <meta name="robots" content="index, nofollow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Zaquariah Holland and Danielle Tobler" />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={eCache} theme={theme}>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
