import styled from 'styled-components';

export const StyledProductShowcase = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    gap:20px;
  `
export const StyledProductCards = styled.div`
    flex: 200px 1 1;
    border:1px solid #e8e2e2;
    border-radius:25px;
    box-shadow:solid #e8e2e2;
    max-width:350px;
    padding:10px 10px;
    cursor: pointer;
`
export const StyledProductImageContainer = styled.div`
    text-align:center;
    padding:0.5em;
  `
export const StyledProductImage = styled.img`
    height:200px;
    margin: 0 auto;
    `
export const StyledProductTitle = styled.div`
    font-size: 0.8em;
    color: black;
    `
export const StyledProductDescription = styled.div`
    font-size:0.9rem;
    color: #969696;
    padding:0.5em 0;
    `
export const StyledProductPrice = styled.div`
    font-size: 1em;
    `
export const StyledProductColorsContainer = styled.div`
    padding:2em 0.5em 1em;
    display:flex;
    align-items: end;
    justify-content:flex-start;
    align-items:end;
    gap:10px;
`
export const StyledProductColors = styled.div<{ backgroundColor: string }>`
  height:12px;
  width:12px;
  border-radius:50px;
  background: ${({ backgroundColor }) => (backgroundColor)};
`