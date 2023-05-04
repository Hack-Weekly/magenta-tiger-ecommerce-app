import styled from 'styled-components';

export const StyledLeftAsideWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5px 10px ; 
    width: 100%;
`
export const StyledTitleHeaders = styled.h3`
    margin-bottom: 15px;
`
export const StyledFiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom:2px solid #e8e2e2;
    padding-bottom:20px ;
    padding-top:20px ;
    width: 100%;
`
export const StyledRRangeRating = styled.input`
	height: 7px;
	max-width: 19em;
	background: blue;
	border-radius: 15px;
    margin: 5px 0;
`
export const StyledStarRatingWrapper = styled.ul`
   display:flex;
   justify-content: flex-start;
   align-items: center;
   width: 100%;
   width: 100%;
`
export const StyledStarRating = styled.ul`
   color:gold;
   font-size:2rem;
   display: flext;
   gap: 5px;
`
export const StyledPriceFilters = styled.input`
  height: 2em;
  max-width: 19em;
  background: #e8e2e2;
  border-radius: 7px;
  margin: 5px 0 5px;
  outline: none;
  border: none;
  ::placeholder {
   padding-left: 10px
}
`
export const StyledCheckBoxFiltersWrapper = styled.div`
    color:#8C8C8C ;
    align-items: center;
    width: 100%;
    display:flex;
    gap:10px;
  `
export const StyledCheckBoxFilters = styled.input`
  height: 2em;
  width: 1.5em;
  background: #e8e2e2;
  border-radius: 2px;
  margin: 5px 0 5px;
  outline: none;
  border: none;
  `