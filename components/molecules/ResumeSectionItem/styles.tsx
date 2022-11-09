import { Box, Heading, Tag as ChakraTag, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled(Box)`
  padding: ${({ theme }) => theme.space.rem[4]} 0;
`;

export const Title = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.space.rem[4]};
`;

export const Tag = styled(ChakraTag)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.space.rem[2]} ${theme.space.rem[4]}`};
  margin-bottom: ${({ theme }) => theme.space.rem[2]};
`;

export const Description = Text;
