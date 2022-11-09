import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image as ChakraImage,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled(Box)`
  border-radius: ${({ theme }) => theme.space.rem[2]};
  background-color: ${({ theme }) => theme.colors.primary}5C;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: ${({ theme }) => theme.space.rem[8]};
`;

export const Title = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  margin-top: ${({ theme }) => theme.space.rem[4]};
`;

export const Subtitle = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSizes.xl} !important;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  margin-top: ${({ theme }) => theme.space.rem[12]};
`;

export const Image = styled(ChakraImage)`
  height: ${({ theme }) => theme.space.rem[48]};
  position: absolute;
  width: ${({ theme }) => theme.space.rem[64]};
  top: ${({ theme }) => theme.space.percent.sm};
  left: ${({ theme }) => theme.space.percent.sm};
`;

export const Project = styled(Box)`
  padding: ${({ theme }) => theme.space.rem[4]};
  margin-top: ${({ theme }) => theme.space.rem.custom(14.125)};
  margin-bottom: ${({ theme }) => theme.space.rem[4]};
  background-color: #fff;
  text-align: center;
  position: relative;
  height: ${({ theme }) => theme.space.percent.xxl};
`;

export const Information = styled(Box)`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.space.rem[68]};
`;

export const Diviser = styled(Divider)`
  width: 3rem;
  opacity: 1;
  border-bottom-width: 0.225rem;
  margin: ${({ theme }) => `${theme.space.rem[4]} auto ${theme.space.rem[8]}`};
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const Summary = styled(Text)`
  height: 100px;
  color: ${({ theme }) => theme.colors.secondary};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Tags = styled(Wrap)`
  margin-bottom: ${({ theme }) => theme.space.rem[8]};
`;
export const Tag = styled(WrapItem)`
  padding: ${({ theme }) => theme.space.rem[4]} 0;
  text-transform: uppercase;
`;

export const Actions = Flex;
export const Action = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary}a6;
  color: ${({ theme }) => theme.colors.light};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
