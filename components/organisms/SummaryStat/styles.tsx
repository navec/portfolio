import {
  Stat as ChakraStat,
  StatHelpText,
  StatNumber,
  StatProps,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

const StatValue = styled(StatNumber)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.space.rem[16]} !important;
`;

const StatDescription = styled(StatHelpText)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg} !important;
  letter-spacing: ${({ theme }) => theme.fontSizes.custom(0.1)};
`;

type StyledStatProps = StatProps & {
  value: string;
  description: string;
  index: number;
};

const StyledStat = ({ value, description, ...props }: StyledStatProps) => (
  <ChakraStat {...props}>
    <StatValue>{value}</StatValue>
    <StatDescription>{description}</StatDescription>
  </ChakraStat>
);

export const Stat = styled(StyledStat)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.space.percent.xxl};
  text-align: center;
  padding: ${({ theme }) => theme.space.rem[4]};
  border-right: ${({ index }) => (index % 2 === 0 ? 2 : 0)}px dashed
    ${({ theme }) => theme.colors.white};
  border-top: ${({ index }) => (index > 1 ? 2 : 0)}px dashed
    ${({ theme }) => theme.colors.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-right: 0;
    border-top: ${({ index }) => (index > 0 ? 2 : 0)}px dashed
      ${({ theme }) => theme.colors.white};
  }
`;
