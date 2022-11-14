import { List, ListIcon, ListItem } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Menu = styled(List)`
  top: 50%;
  transform: translateY(-50%);
  right: 2.5%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.space.rem[8]};
  padding: ${({ theme }) => theme.space.rem[6]};
  position: fixed;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MenuItem = styled(ListItem)`
  margin: ${({ theme }) => theme.space.rem[0]} !important;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.light};
    transition: all 0.3s ease-in-out;
  }

  ::before {
    content: '';
    display: block;
    border-left: 2px dashed;
    margin: 5px 10px;
    height: ${({ theme }) => theme.space.rem[4]};
  }

  &.active {
    color: ${({ theme }) => theme.colors.light};
    ::before {
      color: initial;
    }
  }

  &:first-of-type {
    ::before {
      content: '';
      height: ${({ theme }) => theme.space.rem['0']};
    }
  }
`;

export const Icon = styled(ListIcon)`
  margin: ${({ theme }) => theme.space.rem['0']};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
`;
