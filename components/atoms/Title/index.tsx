import * as S from './styles';

type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => (
  <S.Title as="h1">{children}</S.Title>
);

export default Title;
