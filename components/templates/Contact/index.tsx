import Title from '@/components/atoms/Title';
import { SocialContactProps } from '@/components/organisms/SocialContact';

import * as S from './styles';

type ContactTemplateProps = {
  title: string;
  subtitle: string;
  description: string;
  endWord: string;
  socials: SocialContactProps['socials'];
};

const ContactTemplate = (porps: ContactTemplateProps) => {
  const { title, subtitle, description, socials, endWord } = porps;

  return (
    <S.Layout>
      <Title>{title}</Title>
      <S.Subtitle as="h2">{subtitle}</S.Subtitle>
      <S.Description>{description}</S.Description>
      <S.Socials socials={socials} />
      <S.EndWord>{endWord}</S.EndWord>
    </S.Layout>
  );
};

export default ContactTemplate;
