import {
    StyledLeftAsideWrapper,
    StyledTitleHeaders,
    StyledFiltersContainer,
    StyledRatingRange,
    StyledStarRatingWrapper,
    StyledStarRating,
    StyledPriceFilters,
    StyledCheckBoxFilters,
    StyledCheckBoxFiltersWrapper
} from "./ProductsFilters.style"
import {
    GetServerSideProps,
    InferGetServerSidePropsType
} from 'next';

export const ProductsFilters = ({ productTypes }: InferGetServerSidePropsType<GetServerSideProps>) => {
    return (
        <StyledLeftAsideWrapper>
            <StyledTitleHeaders>Filter</StyledTitleHeaders>
            {/*
             Slider and Star rating filters section
             [TO DO] Make this a seperate component and import here
            */}
            <StyledFiltersContainer>
                <StyledTitleHeaders>Rating</StyledTitleHeaders>
                <StyledRatingRange
                    type="range"
                    name="rating"
                    min="1"
                    max="5"
                ></StyledRatingRange>
                <StyledStarRatingWrapper>
                    <StyledStarRating>
                        ★★★★★
                    </StyledStarRating>
                </StyledStarRatingWrapper>
            </StyledFiltersContainer>

            {/* Filter by price section */}
            <StyledFiltersContainer>
                <StyledTitleHeaders>Price</StyledTitleHeaders>
                <StyledPriceFilters
                    type="text"
                    placeholder="From  20, 000"
                ></StyledPriceFilters>
                <StyledPriceFilters
                    type="text"
                    placeholder="To 50, 000"
                ></StyledPriceFilters>
            </StyledFiltersContainer>

            {/* Filter by brand section */}
            <StyledFiltersContainer>
                <StyledTitleHeaders>Brang</StyledTitleHeaders>
                {productTypes.map((productType: string, index: number) =>
                    <StyledCheckBoxFiltersWrapper>
                        {index === 0 ?
                            <StyledCheckBoxFilters
                                type="checkbox"
                                key={productType}
                                checked />
                            : <StyledCheckBoxFilters
                                type="checkbox"
                                key={productType} />}
                        {productType}
                    </StyledCheckBoxFiltersWrapper>
                )}
            </StyledFiltersContainer>
        </StyledLeftAsideWrapper>
    )
}