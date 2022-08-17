import {
  Button,
  ButtonProps,
  ComponentWithAs,
  Heading,
  Text,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  min-height: 100%;
  margin-bottom: 5rem;
`;

export const Title = styled(Heading)`
  font-size: 2.8rem;
  line-height: 2.8rem;
  font-family: font-file-82132;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) =>
    `${theme.space.viewHeight.s} ${theme.space.rem[6]} ${theme.space.viewHeight.s}`};

  &::before,
  &::after {
    display: block;
    font-family: 'La Belle Aurore', cursive;
    color: #1a202cad;
    font-size: ${({ theme }) => theme.fontSizes.md};
    text-decoration: line-through;
    margin-left: -${({ theme }) => theme.fontSizes.md};
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &::before {
    content: '<h1>';
  }

  &::after {
    content: '</h1>';
    text-align: right;
  }
`;

export const Description = styled(Text)`
  padding: ${({ theme }) => `0 ${theme.space.rem[6]}`};
  font-size: ${({ theme }) => theme.fontSizes.lg};

  &::before,
  &::after {
    display: block;
    font-family: 'La Belle Aurore', cursive;
    color: #1a202cad;
    font-size: 20px;
    text-decoration: line-through;
    margin-left: -20px;
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &::before {
    content: '<p>';
  }

  &::after {
    content: '</p>';
  }
`;

const Btn: ComponentWithAs<'button', ButtonProps> = ({
  children,
  ...props
}) => (
  <Button colorScheme="teal" variant="outline" {...props}>
    {children}
  </Button>
);

export const Action = styled(Btn)`
  margin-top: 2rem;
  margin-left: ${({ theme }) => theme.space.rem[6]};
  padding: ${({ theme }) => `0 ${theme.space.rem[8]}`};
`;
