import {
  Box,
  ComponentWithAs,
  Flex,
  GridItem,
  GridItemProps,
  Heading,
  Icon as ChakraIcon,
  Progress,
  ProgressProps,
  Wrap,
  WrapItem,
  WrapItemProps,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Layout = styled(Box)`
  min-height: ${({ theme }) => theme.space.percent.xxl};
  margin-bottom: ${({ theme }) => theme.space.rem[20]};
  margin-bottom: ${({ theme }) => theme.space.rem[20]};
`;

export const Title = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const Underline = styled.div`
  height: ${({ theme }) => theme.space.rem[0.5]};
  width: ${({ theme }) => theme.space.rem[40]};
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.space.rem[16]};
`;

export const GridIcon: ComponentWithAs<'div', GridItemProps> = ({
  children,
  ...props
}) => (
  <GridItem
    colSpan={2}
    display="flex"
    alignItems="center"
    justifyContent="center"
    m={1}
    {...props}
  >
    {children}
  </GridItem>
);

export const Icon = styled(ChakraIcon)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
`;

export const Skill = Wrap;

export const SkillItem: ComponentWithAs<'li', WrapItemProps> = ({
  children,
  props,
}) => (
  <WrapItem w="100%" {...props}>
    <Flex h="30px" w="100%">
      {children}
    </Flex>
  </WrapItem>
);

export const SkinLabel = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  width: 7rem;
  line-height: 30px;
  padding: 0 10px;
`;

export const SkillProgress: React.FC<ProgressProps> = ({ ...props }) => {
  return (
    <Progress
      hasStripe
      w="calc(100% - 80px)"
      colorScheme="blackAlpha"
      h="100%"
      marginInlineStart="0 !important"
      marginStart="0 !important"
      {...props}
    />
  );
};
