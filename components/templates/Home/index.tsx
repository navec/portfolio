import * as S from './styles';

const Home = () => (
  <S.Layout>
    <S.Title as="h1">
      <span>Hi,</span>
      <br />
      <span>my name is </span>
      <br />
      <span>Gaël Batchi.</span>
    </S.Title>
    <S.Description>I am a Full-Stack Developer</S.Description>
    <S.Action>Contact me</S.Action>
  </S.Layout>
);

export default Home;
