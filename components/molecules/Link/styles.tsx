import { Link as ChakratLink } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';

export const ColorfulLink = styled(ChakratLink)`
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    text-decoration: none;
  }
`;

export const NextLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;
