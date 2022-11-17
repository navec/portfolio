import Link, { LinkProps } from '@/components/molecules/Link';
import { Box, Button, Flex, Heading, Tag, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled(Flex)`
  flex-direction: row;
  height: ${({ theme }) => theme.space.percent.xxl};
  width: ${({ theme }) => theme.space.viewWidth.xxl};
  align-items: center;

  & > * {
    flex: 1;
  }
`;

export const Introduction = styled(Box)`
  padding: ${({ theme }) => theme.space.rem[16]};
  max-width: ${({ theme }) => theme.space.viewWidth.l};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${({ theme }) => theme.space.viewWidth.xxl};
    padding: ${({ theme }) => theme.space.rem[4]};
    padding: ${({ theme }) => `${theme.space.rem[8]} `};
  }
`;

export const Subtitle = styled(Heading)`
  font-size: ${({ theme }) => theme.space.rem[16]} !important;
  margin-bottom: ${({ theme }) => theme.space.rem[8]};

  @media screen and (max-width: 767px) {
    font-size: ${({ theme }) => theme.space.rem[12]} !important;
  }
`;

export const Title = styled(Heading)`
  font-size: ${({ theme }) => theme.space.rem[20]} !important;

  @media screen and (max-width: 767px) {
    font-size: ${({ theme }) => theme.space.rem[16]} !important;
  }
`;

export const Job = styled(Tag)`
  margin-bottom: ${({ theme }) => theme.space.rem[8]};
`;

export const AboutMe = styled(Text)`
  margin-bottom: ${({ theme }) => theme.space.rem[8]};
`;

export const ActionButton = styled(Button)`
  padding: 0 ${({ theme }) => theme.space.rem[8]};
  background: ${({ theme }) => theme.colors.primary}cf;
  color: ${({ theme }) => theme.colors.light};
  line-height: ${({ theme }) => theme.space.rem[12]};
  height: ${({ theme }) => theme.space.rem[12]};
  border-radius: var(--chakra-radii-2xl);

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
export const More = ({ children, ...props }: LinkProps) => (
  <Link {...props}>
    <ActionButton>{children}</ActionButton>
  </Link>
);

export const Photo = styled(Flex)<{ poster: string }>`
  background-image: url(${({ poster }) => poster});
  height: ${({ theme }) => theme.space.percent.xxl};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  align-items: center;
  justify-content: end;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
