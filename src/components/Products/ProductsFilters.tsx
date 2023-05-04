import {
    StyledLeftAsideWrapper,
    StyledTitleHeaders,
    StyledFiltersContainer,
    StyledRRangeRating,
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
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

export const ProductsFilters = ({ productTypes }: InferGetServerSidePropsType<GetServerSideProps>) => {
    const [selectedBrandFilter, setSelectedBrandFilter] = useState('');
    const [rangeRatingSlider, setRangeRatingSlider] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const router = useRouter();

    // Set selected products brand for products filtering
    const handleSelectedProductBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
        router.push(router.asPath)
        setSelectedBrandFilter(event.target.value);
    }

    const handleRangeRatingSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeRatingSlider(event.target.value);
    }

    const handlePriceFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceFilter(event.target.value);
    }

    return (
        <StyledLeftAsideWrapper>
            <StyledTitleHeaders>Filter</StyledTitleHeaders>
            {/*
             Slider and Star rating filters section
             [TO DO] Make this a seperate component and import here
            */}
            <StyledFiltersContainer>
                <StyledTitleHeaders>Rating</StyledTitleHeaders>
                <StyledRRangeRating
                    type="range"
                    name="rating"
                    min="1"
                    max="5"
                    onChange={handleRangeRatingSlider}
                ></StyledRRangeRating>
                <StyledStarRatingWrapper>
                    <StyledStarRating>
                        <li key='1'>★</li>
                    </StyledStarRating>
                </StyledStarRatingWrapper>
            </StyledFiltersContainer>

            {/* Filter by price section */}
            <StyledFiltersContainer>
                <StyledTitleHeaders>Price</StyledTitleHeaders>
                <StyledPriceFilters
                    type="text"
                    placeholder="From  20, 000"
                    onChange={handlePriceFilter}
                ></StyledPriceFilters>
                <StyledPriceFilters
                    type="text"
                    placeholder="To 50, 000"
                    onChange={handlePriceFilter}
                ></StyledPriceFilters>
            </StyledFiltersContainer>

            {/* Filter by brand section */}
            <StyledFiltersContainer>
                <StyledTitleHeaders>Brang</StyledTitleHeaders>
                {productTypes.map((productType: string, index: number) =>
                    <StyledCheckBoxFiltersWrapper key={productType}>
                        {index === 0 ?
                            <StyledCheckBoxFilters
                                type="checkbox"
                                key={productType}
                                onChange={handleSelectedProductBrand}
                                checked />
                            : <StyledCheckBoxFilters
                                type="checkbox"
                                key={productType}
                                onChange={handleSelectedProductBrand}
                            />}
                        {productType}
                    </StyledCheckBoxFiltersWrapper>
                )}
            </StyledFiltersContainer>
        </StyledLeftAsideWrapper>
    )
}