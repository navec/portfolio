import { LinkProps as CharaUiLinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import * as S from './styles';

export type LinkType = 'tel' | 'mailto' | 'fax' | 'callto' | 'text';

export type LinkProps = CharaUiLinkProps & {
  type?: LinkType;
  href: string;
  children: React.ReactNode;
};

const Link = ({ children, href, type = 'text', ...props }: LinkProps) => {
  if (type !== 'text') {
    return (
      <S.ColorfulLink {...props} href={`${type}:${href}`}>
        {children}
      </S.ColorfulLink>
    );
  }
  return (
    <NextLink href={href} passHref>
      <S.ColorfulLink {...props} isExternal>
        {children}
      </S.ColorfulLink>
    </NextLink>
  );
};

export default Link;
