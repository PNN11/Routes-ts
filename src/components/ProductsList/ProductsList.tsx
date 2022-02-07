import React from "react";
import { Container } from "@mui/material";
import { ProductsListProps } from "./ProductsList.types";
import Product from "components/Product";

const ProductsList: React.FC<ProductsListProps> = ({
  list,
  onEditProduct,
  onDeleteProduct,
}) => {
  const productList = list.map((item) => (
    <Product
      onDeleteProduct={onDeleteProduct}
      onEditProduct={onEditProduct}
      key={item.title}
      product={item}
    />
  ));
  return (
    <Container
      sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}
      component="ul"
    >
      {productList}
    </Container>
  );
};

export default ProductsList;
