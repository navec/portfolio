import { Box, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled(Box)`
  min-height: ${({ theme }) => theme.space.percent.xxl};
  margin-bottom: ${({ theme }) => theme.space.rem[4]};
`;

export const Title = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const Underline = styled.div`
  height: ${({ theme }) => theme.space.rem[0.5]};
  width: ${({ theme }) => theme.space.rem[40]};
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.space.rem[16]};
`;
