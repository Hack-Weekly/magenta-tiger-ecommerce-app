import { Products as ProductList } from '../../components/Products/Products';
import { StyledPageContainer } from '@/components/StyledContainer/StyledContainer';
import { Product } from '../../types/Product.types';
import {
    GetServerSideProps,
    InferGetServerSidePropsType
} from 'next';
import { useState } from 'react';
import type { NextRequest, NextResponse } from "next/server";
import { useRouter } from 'next/router';


export default function Products({ products, reqPath, productTypes }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <StyledPageContainer >
            <ProductList
                products={products}
                reqPath={reqPath}
                productTypes={productTypes}
            />
        </StyledPageContainer>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const reqPath = context.query.product;

    // We need a product type list
    let productTypes = ['Smartphones', 'Cloths', 'Shoes', 'Computers', 'Cars'];

    // Wee need to add products color property to Products data
    let productColor = ['gold', 'green', 'black', 'orange'];

    //{TO DO} Fetch products fro firebase storage here using the "reqPath"

    // FOR TESTING:--simulate product list of 22 items
    let getProducts = () => {
        let $ = {
            title: 'Samsung X58 bla bla bla',
            description: 'This is a production decription for samsung bla bal bla',
            price: '8000',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/magenta-tiger-ecommerce-d81fd.appspot.com/o/imagesmmmm.jpg?alt=media&token=4ce3ac22-4c98-4078-bfd3-5649908d691d',
            metadata: {
                author: {
                    name: 'string',
                    photoUrl: 'string',
                    uid: 'string',
                },
                createdAt: 200000,
                lastModifiedAt: 200000,
            },
            // Wee need to add products color 
            productColor: productColor
        };
        let products = [];
        for (let i = 0; i <= 20; i++) {
            products.push($);
        }
        return products;
    };
    let products = getProducts();
    return { props: { products, reqPath, productTypes } }
}
