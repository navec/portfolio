import * as S from './styles';

type HomeProps = {
  subTitle: string;
  title: string;
  tag: string;
  text: string;
  action: { name: string; link: string };
  poster: string;
};

const Home = ({ subTitle, title, tag, text, action, poster }: HomeProps) => (
  <S.Layout>
    <S.Introduction>
      <S.Subtitle as="h2">{subTitle}</S.Subtitle>
      <S.Title as="h1">{title}</S.Title>

      <S.Job size="lg" borderRadius="base" variant="solid" colorScheme="teal">
        {tag}
      </S.Job>

      <S.AboutMe>{text}</S.AboutMe>

      <S.More href={action.link}>{action.name}</S.More>
    </S.Introduction>
    <S.Photo poster={poster} />
  </S.Layout>
);

export default Home;
