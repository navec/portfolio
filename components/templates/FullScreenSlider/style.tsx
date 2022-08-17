import { Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';

const Div = (props: HTMLMotionProps<'div'>) => (
  <motion.div
    initial={{ x: 0 }}
    animate={{ x: '-100vw' }}
    transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5, delay: 1.5 }}
    {...props}
  />
);

export const Layout = styled(Div)`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
  line-height: ${({ theme }) => theme.lineHeights[8]};
  padding: ${({ theme }) => theme.space.rem[4]};
  position: fixed;
  padding-top: ${({ theme }) => theme.space.viewHeight.custom(35)};
  z-index: ${({ theme }) => theme.zIndices.overlay};
  top: 0;
`;

export const Title = styled(Heading)`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const Description = styled(Text)``;
