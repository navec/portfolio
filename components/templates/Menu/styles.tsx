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
  return <HStack {...props}>{children}</HStack>;
};

export const Nav = styled(Stack)`
  width: ${({ theme }) => theme.space.percent.xxl};
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  position: fixed;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndices.overlay};
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
