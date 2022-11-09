import { Flex } from '@chakra-ui/react';
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
