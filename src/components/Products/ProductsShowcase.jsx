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
    const productCards = [];
    for (let product of products) {
        let card = <StyledProductCards>
            <StyledProductImageContainer>
                <StyledProductImage src={product.imageUrl}></StyledProductImage>
                <StyledProductTitle>{product.title}</StyledProductTitle>
                <StyledProductDescription>{product.description}</StyledProductDescription>
                <StyledProductPrice>&#36;{product.price}</StyledProductPrice>
                <StyledProductColorsContainer>
                    {product.productColor.map(color => (
                        <StyledProductColors key={color} backgroundColor={color}></StyledProductColors>
                    ))}
                </StyledProductColorsContainer>
            </StyledProductImageContainer>
        </StyledProductCards>
        productCards.push(card);
    }
    return productCards;
}

export const ProductShowcase = ({products}) => {
    return (
        <StyledProductShowcase >
            {
                ProductCards(products).map((productCard) => productCard)
            }
        </StyledProductShowcase>
    )
}