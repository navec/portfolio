import {
  Box,
  BoxProps,
  Menu as CharaUIMenu,
  MenuDivider,
  Slide,
  Text,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled(Box)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space.rem[8]};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const HamburgerLine = styled.span`
  display: block;
  height: ${({ theme }) => theme.fontSizes.custom(0.225)};
  width: ${({ theme }) => theme.space.percent.xxl};
  border-radius: ${({ theme }) => theme.space.rem[4]};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Hamburger = (props: BoxProps) => (
  <Box {...props}>
    <HamburgerLine />
    <HamburgerLine />
    <HamburgerLine />
  </Box>
);

export const MenuIcon = styled(Hamburger)`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    height: ${({ theme }) => theme.space.rem[6]};
    width: ${({ theme }) => theme.space.rem[7.5]};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    &.show {
      & > span:first-of-type {
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
      }
      & > span:last-child {
        transform-origin: 0% 0%;
        transition: transform 0.4s ease-in-out;
      }

      & > span:nth-child(2) {
        display: block;
        transition: display 0.4s ease-in-out;
      }
    }

    &.close {
      & > span:first-of-type {
        transform: rotate(45deg);
        transform-origin: 0% 0%;
        transition: transform 0.4s ease-in-out;
      }
      & > span:last-child {
        transform: rotate(-45deg);
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
      }

      & > span:nth-child(2) {
        display: none;
      }
    }
  }
`;

export const MenuContent = styled(Slide)`
  z-index: ${({ theme }) => theme.zIndices.overlay};
  margin-top: ${({ theme }) => theme.space.rem[22]};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space.rem[4]};
`;

export const Menu = styled(CharaUIMenu)``;

export const Diviser = styled(MenuDivider)`
  margin-bottom: ${({ theme }) => theme.space.rem[8]};
`;

export const Copyright = styled(Box)`
  position: absolute;
  right: ${({ theme }) => theme.space.rem[4]};
  bottom: ${({ theme }) => theme.space.rem[4]};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled(Text)`
  position: absolute;
  right: ${({ theme }) => theme.space.rem[4]};
  top: ${({ theme }) => theme.space.rem[16]};
  transform: rotate(90deg);
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;
