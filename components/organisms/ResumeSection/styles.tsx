import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled(Box)`
  padding: ${({ theme }) => theme.space.rem[10]} 0;
  border-bottom: 1px dashed;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    border: 0;
  }
`;

export const SectionTitle = styled(Heading)`
  font-size: ${({ theme }) => theme.space.rem[12]} !important;
  margin-bottom: ${({ theme }) => theme.space.rem[4]};
`;

export const SectionContent = styled(SimpleGrid)`
  grid-gap: ${({ theme }) => theme.space.rem[8]};
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
