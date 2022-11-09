import Menu from '@/components/templates/Menu';
import Head from 'next/head';
import * as S from './styles';

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
        <S.Container>
          <Menu />
          <S.StyledBox>
            <Component {...props} />
          </S.StyledBox>
        </S.Container>
      </>
    );
  };
};

export default withGlobalLayout;
