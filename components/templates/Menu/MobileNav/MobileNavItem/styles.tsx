import { MenuItem } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled(MenuItem)<{ selected: boolean }>`
  padding: ${({ theme }) => theme.space.rem[4]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.xl};

  & > a {
    color: ${({ theme, selected }) => (selected ? theme.colors.primary : theme.colors.black)};
  }

  &:active,
  :focus {
    background: none;
  }
`;
