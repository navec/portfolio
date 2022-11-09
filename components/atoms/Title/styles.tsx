import { Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Title = styled(Heading)`
  border: 1px dashed;
  text-align: center;
  font-size: 5rem !important;
  padding: 2rem;
  margin-bottom: 6rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.3rem !important;
    margin-bottom: 3rem;
  }
`;
