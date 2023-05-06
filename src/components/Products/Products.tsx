import {
    StyledProductContainer,
    StyledProductsHeaderContainer,
    StyledMainNavigator,
    StyledProductsArticle,
    StyledProductsSummary,
    StyledSelectProductsFilter,
    StyledSelecteOption,
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
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'

export const Products = ({ products, reqPath, productTypes }: InferGetServerSidePropsType<GetServerSideProps>) => {
    const router = useRouter();
    const [currenPagePath, setCurrenPagePath] = useState('')

    // Set selected products type for products filtering
    const handleSelectedProductType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedProductType = event.target.value
        router.replace(`/products/${selectedProductType}`);
        setCurrenPagePath(selectedProductType);
    }

    useEffect(() => {
        setCurrenPagePath(reqPath);
    }, [setCurrenPagePath]);

    return (
        <StyledProductContainer>
            <StyledProductsHeaderContainer>
                <StyledMainNavigator>
                    {
                        <div key={currenPagePath}>
                            <Link href={"/products/all"}> products </Link>
                            <span>&#9656;</span>
                            <Link href={`/products/${currenPagePath}`}>{currenPagePath}</Link>
                        </div>

                    }
                </StyledMainNavigator>
                <StyledProductsArticle>
                    <StyledProductsSummary>{currenPagePath} {`(${products.length})`}</StyledProductsSummary>
                    <StyledSelectProductsFilter onChange={handleSelectedProductType}>
                        <StyledSelecteOption
                            key='selectProduct'
                            defaultValue={'Select product type'}
                        > Select product type
                        </StyledSelecteOption>
                        {
                            productTypes.map((productType: string) => (
                                <StyledSelecteOption
                                    key={productType}
                                    value={productType}
                                >{productType}
                                </StyledSelecteOption>
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