import { LinkType } from '@/components/molecules/Link';
import { SimpleGridProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import * as S from './styles';

type ContentProps = {
  type: LinkType;
  value: string;
  alias?: string;
};

export type SocialContactProps = SimpleGridProps & {
  socials: {
    icon: IconType;
    title: string;
    content: ContentProps;
  }[];
};

const SocialContact = ({ socials, ...props }: SocialContactProps) => {
  return (
    <S.Layout {...props} columns={{ base: 1, sm: 3 }}>
      {socials.map(({ icon, title, content }) => (
        <S.Social key={title} mb="1.5rem">
          <S.ColorfulIcon as={icon} fontSize="3.5rem" />
          <S.Title as="h3" fontSize="large">
            {title}
          </S.Title>
          <S.Content href={content.value} type={content.type} isExternal={content.type === 'text'}>
            {content.alias || content.value}
          </S.Content>
        </S.Social>
      ))}
    </S.Layout>
  );
};

export default SocialContact;
