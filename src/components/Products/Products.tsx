import {
    StyledProductContainer,
    StyledProductsHeaderContainer,
    StyledMainNavigator,
    StyledProductsArticle,
    StyledProductsSummary,
    StyledSelectProductsFilter,
    StyledMainContentWrapper,
    StyledLeftAside,
    StyledMainGridContainer,
    StyledProductShowcaseWrapper
} from './Products.tyles';
import { ProductShowcase } from './ProductsShowcase';
import { ProductsFilters } from './ProductsFilters';
import {
    GetServerSideProps,
    InferGetServerSidePropsType
} from 'next';
import React, { useRef, useState } from 'react';

export const Products = ({ products, params, productTypes }: InferGetServerSidePropsType<GetServerSideProps>) => {
    const [selectedProductType, setSelectedProductType] = useState('all products');

    // Set selected products types for products filtering
    const handleSelectedProductType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProductType(event.target.value);
    }

    return (
        <StyledProductContainer>
            <StyledProductsHeaderContainer>
                <StyledMainNavigator>
                    {
                        params.map((param: string, index: number) => (
                            <div key={param}>
                                {param}
                                {index + 1 !== params.length && <span>&#9656;</span>}
                            </div>
                        ))
                    }
                </StyledMainNavigator>
                <StyledProductsArticle>
                    <StyledProductsSummary>{selectedProductType} {`(${products.length})`}</StyledProductsSummary>
                    <StyledSelectProductsFilter onChange={handleSelectedProductType}>
                        {
                            productTypes.map((productType: string) => (
                                <option value={productType} key={productType}>
                                    {productType}
                                </option>
                            ))
                        }
                    </StyledSelectProductsFilter>
                </StyledProductsArticle>
            </StyledProductsHeaderContainer>

            {/** Main */}
            <StyledMainContentWrapper>
                <StyledMainGridContainer>

                    {/* Left aside section*/}
                    <StyledLeftAside>
                        <ProductsFilters productTypes={productTypes} />
                    </StyledLeftAside>

                    {/* Main Products list showcase section */}
                    <StyledProductShowcaseWrapper>
                        <ProductShowcase products={products}></ProductShowcase>
                    </StyledProductShowcaseWrapper>
                </StyledMainGridContainer>
            </StyledMainContentWrapper>
        </StyledProductContainer>
    )
}