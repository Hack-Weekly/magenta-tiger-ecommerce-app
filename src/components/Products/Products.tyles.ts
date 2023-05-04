import styled from "styled-components";

export const StyledProductContainer = styled.div`
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     width: 100%;
     height: 100%;
     max-width: 85rem;
`
export const StyledProductsHeaderContainer = styled.div`
    background:white;
    flex:1 0 1;
    width:100%;
    padding:5px;
`
export const StyledMainNavigator = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:10px;
    padding:5px;
    font-size:1rem;
`
export const StyledProductsArticle = styled.div`
    display:flex;
    padding:5px;
`
export const StyledProductsSummary = styled.div`
    margin-right:auto;
    font-size:1.2rem ;
    font-family:helvetica;
    font-weight:bold;
`
export const StyledSelectProductsFilter = styled.select`
    padding:3px;
    border-radius:5px;
    border: 1px solid #f5f6 ;
    box-shadow: 1px  1px  #f5f6;
`
export const StyledSelecteOption = styled.option`
`

export const StyledMainContentWrapper = styled.section`
    width:100%;
    height:100%;
    flex:2 2 1;
    padding:15px 10px;   
`
export const StyledMainGridContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr;
    width:100%;
    padding: 0 5px;
    grid-column-gap:10px;
  `
export const StyledLeftAside = styled.aside`
   border:1px solid #e8e2e2;
   border-radius:25px;
   box-shadow:solid #e8e2e2;
   padding: 10px 10px;
  `
export const StyledProductShowcaseWrapper = styled.div`
    padding: 0 5px;
  `