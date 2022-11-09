import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  height: ${({ theme }) => theme.space.percent.xxl};
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const StyledBox = styled(Flex)`
  overflow: auto;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.space.percent.xxl};
  height: ${({ theme }) => theme.space.percent.xxl};

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #e2e2e2;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
`;
