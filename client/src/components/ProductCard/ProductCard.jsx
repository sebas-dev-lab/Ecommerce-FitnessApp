import React from "react";
import { Button, Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import "./ProductCard.css";
import StarRatings from "react-star-ratings";

const productCard = () => {
  return (
    // TODO:Create State and link it to the component
    <Card>
      <CardImg
        className="product-img"
        top
        width="100%"
        src="https://cdn.shopify.com/s/files/1/1618/2767/products/SportSeries_CombatProtein_2lb_ChocolateMilk_view1_650x.jpg?v=1559580836"
        alt="Product Card Img"
      />
      <CardTitle>Product Name</CardTitle>
      <StarRatings
        rating={2.403}
        starRatedColor="#6B83FC"
        starDimension="40px"
        starSpacing="15px"
      />
      <p>Reviews: 3</p>
      <CardSubtitle>Precio: 60$</CardSubtitle>
      <Button className="btn-add-cart" size="sm">
        Agregar a Carrito
      </Button>
    </Card>
  );
};
export default productCard;
