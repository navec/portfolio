import { Link } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ColorfulLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
`;
