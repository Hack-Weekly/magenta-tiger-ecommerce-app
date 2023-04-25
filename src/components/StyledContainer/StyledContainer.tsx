import styled, { css } from 'styled-components';
import { StyledContainer } from './StyledContainer.types';

const StyledContainer = styled.div<StyledContainer>`
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
  width: 100%;
  height: 100%;
`;

export default StyledContainer;
