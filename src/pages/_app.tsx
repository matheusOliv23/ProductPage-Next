import type { AppProps } from "next/app";
import Head from "next/head";
import { globalStyles } from "src/styles/global";
import logo from "src/assets/logoig.svg";
import Image from "next/image";
import { Container, Header } from "src/styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <title>Moda Masculina</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Image alt="Logo do projeto" width={52} height={52} src={logo} />
        <p>Ecommerce</p>
        <h1>MODA MASCULINA</h1>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
