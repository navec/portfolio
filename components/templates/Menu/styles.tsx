import {
  Center,
  ChakraComponent,
  ComponentWithAs,
  HStack,
  Link,
  StackProps,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

const Stack: ComponentWithAs<'div', StackProps> = ({
  children,
  ...props
}: StackProps) => {
  return (
    <HStack align="center" {...props}>
      {children}
    </HStack>
  );
};

export const Nav = styled(Stack)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
`;

export const Li: ChakraComponent<'div', {}> = ({ children, ...props }) => (
  <Center flex={1} as="li" {...props}>
    <Link>{children}</Link>
  </Center>
);

export const NavItem = styled(Li)`
  height: ${({ theme }) => theme.space.rem[16]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
