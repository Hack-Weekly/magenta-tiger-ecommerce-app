import { useRouter } from 'next/router';
import {
    StyledProductShowcase,
    StyledProductCards,
    StyledProductImageContainer,
    StyledProductImage,
    StyledProductTitle,
    StyledProductDescription,
    StyledProductPrice,
    StyledProductColorsContainer,
    StyledProductColors
} from './ProductsShowcase.style';

const ProductCards = (products) => {
    const router = useRouter()
    const productCards = [];
    let CardUniqeKey = 0;

    const handleProductClick = () => {
        // navigate to single product page view
        router.replace('/#')
    }
    for (let product of products) {
        CardUniqeKey = CardUniqeKey += 1
        let card = <StyledProductCards key={`${product}-${CardUniqeKey}`} onClick={handleProductClick}>
            <StyledProductImageContainer key="productImg">
                <StyledProductImage
                    src={product.imageUrl}
                    key={product.imageUrl}>
                </StyledProductImage>
                <StyledProductTitle key={product.title}>
                    {product.title}
                </StyledProductTitle>
                <StyledProductDescription key={product.description}>
                    {product.description}
                </StyledProductDescription>
                <StyledProductPrice key={product.price}>
                    &#36;{product.price}
                </StyledProductPrice>
                <StyledProductColorsContainer key="productColor">
                    {product.productColor.map(color => (
                        <StyledProductColors key={color} background={color}></StyledProductColors>
                    ))}
                </StyledProductColorsContainer>
            </StyledProductImageContainer>
        </StyledProductCards>
        productCards.push(card);
    }
    return productCards;
}

export const ProductShowcase = ({ products }) => {
    return (
        <StyledProductShowcase >
            {
                ProductCards(products).map((productCard) => productCard)
            }
        </StyledProductShowcase>
    )
}