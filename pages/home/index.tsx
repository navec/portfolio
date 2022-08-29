import withPageLayout from '@/components/HOC/WithPageLayout';
import AboutTemplate from '@/components/templates/About';
import HomeTemplate from '@/components/templates/Home';
import WorksTemplate from '@/components/templates/Works';
import styled from '@emotion/styled';

const templates = [
  { template: <HomeTemplate />, id: 'home' },
  { template: <AboutTemplate />, id: 'about' },
  { template: <WorksTemplate />, id: 'works' },
];
const lastIndex = templates.length - 1;

const Home = () => {
  const fullScreenSlider = { title: 'Gaël Batchi', description: 'portfolio' };

  return (
    <>
      {templates.map(({ template, id }, index) => {
        const Container = lastIndex === index ? LastLayout : Layout;
        return (
          <Container key={id} id={id}>
            {template}
          </Container>
        );
      })}
    </>
  );
};

export default withPageLayout(Home, 'My page title');

const LastLayout = styled.div`
  padding-top: ${({ theme }) => theme.space.rem[4]};
  min-height: ${({ theme }) => theme.space.percent.xxl};
  text-align: center;

  & > * {
    flex-shrink: 0;
  }
`;

const Layout = styled(LastLayout)`
  margin-bottom: ${({ theme }) => theme.space.rem[16]};
`;
