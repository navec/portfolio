import {
  FULL_HEIGHT,
  MOBILE_L,
  MOBILE_S,
  SHADOW,
  TABLET,
} from "@/components/theme";
import { Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const ComingSoonWrapper = styled.div`
  background-color: ${SHADOW};
  display: flex;
  min-height: ${FULL_HEIGHT};
  flex-direction: column;
  padding: 3vh 3vw;
  color: #333333;
  align-items: center;
  background-image: linear-gradient(0turn, #3f87a6e0, #ebf8e1d6, #f69d3cd1),
    url(https://i.stack.imgur.com/IuWLZ.jpg);
  background-size: cover;
  @media (max-width: ${TABLET}) {
    overflow: hidden;
  }
`;

export const Author = styled.div`
  margin-bottom: 30vh;
`;

export const WrappedCountdown = styled.div`
  display: flex;
  margin-bottom: 5vh;
  flex-direction: row;
  gap: 6rem;
  > * {
    flex: 1;
  }
  @media (max-width: ${TABLET}) {
    gap: 2.5rem;
  }
  @media (max-width: ${MOBILE_L}) {
    gap: 1rem;
  }
  @media (max-width: ${MOBILE_S}) {
    gap: 0.7rem;
  }
`;

export const Tag = styled.div`
  > span:first-child {
    color: #ddba79;
    font-size: 1.4rem;
    vertical-align: middle;
    margin-right: 2px;
    font-weight: 600;
  }
`;

export const Title = styled(Heading)`
  margin-bottom: 1vh;
  @media (max-width: ${TABLET}) {
    font-size: 3rem;
  }
  @media (max-width: ${MOBILE_L}) {
    font-size: 2.5rem;
  }
  @media (max-width: ${MOBILE_S}) {
    font-size: 2rem;
  }
`;

export const Description = styled(Text)`
  width: 35vw;
  margin-bottom: 2vh;
  text-align: center;
  @media (max-width: ${TABLET}) {
    font-size: 0.6rem;
  }
  @media (max-width: ${MOBILE_L}) {
    font-size: 0.45rem;
  }
`;
