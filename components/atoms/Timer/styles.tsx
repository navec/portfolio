import { MOBILE_L, TABLET } from "@/components/theme/devise";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  text-align: center;
`;

export const Value = styled.div`
  font-size: 5rem;

  @media (max-width: ${TABLET}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${MOBILE_L}) {
    font-size: 1rem;
  }
`;

export const Unit = styled.div`
  color: #464646;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  @media (max-width: ${TABLET}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${MOBILE_L}) {
    font-size: 0.6rem;
  }
`;
