import { Box, Flex, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Description = Text;
export const Jobs = SimpleGrid;
export const Job = Flex;
export const Information = Box;

export const JobIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.space.rem[2]};
  margin-right: ${({ theme }) => theme.space.rem[4]};
`;

export const Title = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSizes['3xl']} !important;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.space.rem[4]};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const JobTitle = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSizes['6xl']} !important;
  margin-bottom: ${({ theme }) => theme.space.rem[16]};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;
