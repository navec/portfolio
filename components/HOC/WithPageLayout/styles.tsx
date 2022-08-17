import styled from '@emotion/styled';

export const Container = styled.div`
  width: ${({ theme }) => theme.space.viewWidth.xxl};
  padding: ${({ theme }) => `${theme.space.rem[16]} ${theme.space.rem[4]}`};
  overflow: scroll;
  max-height: ${({ theme }) => theme.space.viewHeight.xxl};
  height: ${({ theme }) => theme.space.viewHeight.xxl};
`;
