import { Box, Flex, HStack } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled(Flex)`
  justify-content: center;
  height: ${({ theme }) => theme.space.rem[28]};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Menu = styled(HStack)`
  width: ${({ theme }) => theme.space.percent.xxl};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  justify-content: flex-end;
  max-width: 1140px;
  padding: 0 ${({ theme }) => theme.space.rem['8']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export const MenuItem = styled(Box)`
  text-transform: uppercase;
  cursor: pointer;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid;
    transition: all 0.3s ease-in-out;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid;
    ::before {
      color: initial;
    }
  }

  ::before {
    /* content: '';
    height: ${({ theme }) => theme.space.rem[8]};
    border-left: ${({ theme }) => theme.space.rem[0.5]} dashed; */
  }
`;

// export const Dot = styled.div`
//   height: ${({ theme }) => theme.space.rem[3]};
//   width: ${({ theme }) => theme.space.rem[3]};
//   background-color: ${({ theme }) => theme.colors.secondary};
// `;

// export const DotEnd = styled(Dot)`
//   margin-top: ${({ theme }) => theme.space.rem[4]} !important;
// `;

export const Photo = styled(Flex)`
  background-image: url('https://wallpaperaccess.com/full/348158.png');
  width: ${({ theme }) => theme.space.percent.xxl} !important;
  height: ${({ theme }) => theme.space.viewHeight.custom(37)} !important;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
