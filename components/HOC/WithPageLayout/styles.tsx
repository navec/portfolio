import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  height: ${({ theme }) => theme.space.viewHeight.xl};
  flex-direction: column;
  min-height: -webkit-fill-available;
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.space.rem[4]};
  overflow: scroll;
  height: ${({ theme }) =>
    `calc(${theme.space.percent.xxl} - ${theme.space.rem[16]} - ${theme.space.rem[16]})`};
`;
