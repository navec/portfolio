import { Flex, SimpleGrid } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled(Flex)`
  flex-direction: column;
  padding: ${({ theme }) =>
    `${theme.space.rem[16]} ${theme.space.rem[8]} ${theme.space.rem[16]} ${theme.space.rem[16]}`};
  max-width: 1140px;
  margin-bottom: ${({ theme }) => theme.space.rem[12]};
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space.rem[8]};
    margin-right: 0;
  }
`;

export const Projects = styled(SimpleGrid)`
  display: grid;
  grid-gap: ${({ theme }) => theme.space.rem[10]};
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
