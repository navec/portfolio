import { LinkProps as CharaUiLinkProps } from '@chakra-ui/react';
import * as S from './styles';

export type LinkType = 'tel' | 'mailto' | 'fax' | 'callto' | 'text';

export type LinkProps = CharaUiLinkProps & {
  type?: LinkType;
  isExternal?: boolean;
  href: string;
  children: React.ReactNode;
};

const Link = ({
  children,
  href,
  isExternal = false,
  type = 'text',
  ...props
}: LinkProps) => {
  if (type !== 'text') {
    return (
      <S.ColorfulLink {...props} href={`${type}:${href}`}>
        {children}
      </S.ColorfulLink>
    );
  }

  return (
    <S.NextLink href={href} passHref>
      <S.ColorfulLink {...props} isExternal={isExternal}>
        {children}
      </S.ColorfulLink>
    </S.NextLink>
  );
};

export default Link;
