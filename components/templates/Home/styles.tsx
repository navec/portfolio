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

export const More = Button;

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
