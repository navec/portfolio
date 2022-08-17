import Header from '@/components/templates/Header';
import Menu from '@/components/templates/Menu';
import { theme } from '@/components/theme/index-bis';
import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';
import { Container } from './styles';

const withGlobalLayout = <P extends object>(
  Component: React.ComponentType<P>,
  title: string
) => {
  return (props: P) => {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Header />
          <Menu />
          <Container>
            <Component {...props} />
          </Container>
        </ThemeProvider>
      </>
    );
  };
};

export default withGlobalLayout;
