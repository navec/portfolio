import { Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  height: ${({ theme }) => theme.space.percent.xxl};
  margin-bottom: ${({ theme }) => theme.space.rem[20]};
  text-align: center;

  & > * {
    flex-shrink: 0;
  }
`;

export const Title = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  line-height: ${({ theme }) => theme.fontSizes['5xl']};
  font-family: font-file-82132;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) =>
    `${theme.space.rem[2]}  ${theme.space.rem[6]} ${theme.space.rem[2]} `};

  &::before,
  &::after {
    font-family: 'La Belle Aurore', cursive;
    display: block;
    color: #1a202cad;
    font-size: ${({ theme }) => theme.fontSizes.md};
    text-decoration: line-through;
    margin-left: -${({ theme }) => theme.space.rem[4]};
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &::before {
    content: '<h1>';
  }

  &::after {
    content: '</h1>';
  }
`;

export const Description = styled(Text)`
  margin-top: ${({ theme }) => theme.space.rem[4]};
  padding: ${({ theme }) => `0 ${theme.space.rem[6]}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;

  &::before,
  &::after {
    display: block;
    font-family: 'La Belle Aurore', cursive;
    color: #1a202cad;
    font-size: ${({ theme }) => theme.fontSizes.md};
    text-decoration: line-through;
    margin-left: -${({ theme }) => theme.space.rem[4]};
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &::before {
    content: '<p >';
  }

  &::after {
    content: '</p>';
  }
`;
