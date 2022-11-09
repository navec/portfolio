import Link from '@/components/molecules/Link';
import { Box, Heading, Icon, SimpleGrid } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled(SimpleGrid)`
  grid-gap: ${({ theme }) => theme.space.rem[5]};
  text-align: center;
`;

export const Social = styled(Box)``;
export const ColorfulIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.primary};
`;
export const Title = styled(Heading)``;
export const Content = styled(Link)``;
