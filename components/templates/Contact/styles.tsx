import SocialContact from '@/components/organisms/SocialContact';
import { Flex, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled(Flex)`
  flex-direction: column;
  padding: ${({ theme }) =>
    `${theme.space.rem[16]} ${theme.space.rem[8]} ${theme.space.rem[16]} ${theme.space.rem[16]}`};
  max-width: 1140px;
  margin-bottom: ${({ theme }) => theme.space.rem[12]};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space.rem[8]};
    margin-right: 0;
  }
`;

export const Socials = styled(SocialContact)`
  margin-top: ${({ theme }) => theme.space.viewHeight.s};
`;

export const Description = styled(Text)`
  margin-top: ${({ theme }) => theme.space.rem[6]};
`;

export const Subtitle = Heading;
export const EndWord = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  text-align: center;
  margin-top: ${({ theme }) => theme.space.viewHeight.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.widest};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    letter-spacing: 0;
  }
`;
