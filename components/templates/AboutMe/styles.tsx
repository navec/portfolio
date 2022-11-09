import {
  Flex,
  Grid,
  GridItem,
  GridProps,
  Heading,
  Text,
} from '@chakra-ui/react';
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

export const Subtitle = styled(Heading)`
  font-size: ${({ theme }) => theme.space.rem[8]} !important;
  margin-bottom: ${({ theme }) => theme.space.rem[8]};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']} !important;
  }
`;

export const Description = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space.rem[12]};
`;

const SummaryGrid = (props: GridProps) => <Grid {...props} />;
export const Summary = styled(SummaryGrid)`
  margin-top: ${({ theme }) => theme.space.rem[12]};
  grid-gap: ${({ theme }) => theme.space.rem[8]};
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(8, 1fr);
`;

export const Stats = styled(GridItem)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.space.rem[8]};
  grid-row: span 2 / span 2;
  grid-column: span 8 / span 8;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  min-height: ${({ theme }) => theme.space.rem.custom(35)};
  margin-bottom: ${({ theme }) => theme.space.rem[12]};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const Jobs = styled(GridItem)`
  grid-row: span 2 / span 2;
  grid-column: span 8 / span 8;
`;
