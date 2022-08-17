import { ComponentWithAs, Flex, StackProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Container: ComponentWithAs<'div', StackProps> = ({
  children,
  ...props
}) => <Flex {...props}>{children}</Flex>;

export const Layout = styled(Container)`
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  height: ${({ theme }) => theme.space.rem[16]};
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.space.viewWidth.xxl};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.zIndices.overlay};
`;
