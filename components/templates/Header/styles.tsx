import { ComponentWithAs, Flex, StackProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Container: ComponentWithAs<'div', StackProps> = ({
  children,
  ...props
}) => (
  <Flex align="center" justify="center" {...props}>
    {children}
  </Flex>
);

export const Layout = styled(Container)`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: ${({ theme }) => theme.space.rem[16]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  background-color: ${({ theme }) => theme.colors.white};
`;
