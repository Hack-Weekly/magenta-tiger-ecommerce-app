import styled, { css } from 'styled-components';
import { StyledContainerVariant } from './StyledContainer.types';

export const StyledContainer = styled.div<StyledContainerVariant>`
  ${({ variant }) =>
    variant === 'create-page' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      max-width: 75rem;
      margin: 0 auto;
      margin-top: 5rem;
      padding: 1rem;
    `}
`;

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 90rem;
  margin: 5rem auto;
`;
