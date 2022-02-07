import React, { useEffect, useReducer, useState } from "react";
import Form from "../../components/Form";
import { Container, Dialog, Button } from "@mui/material";
import { Product } from "./Product.types";
import ProductsList from "components/ProductsList";

const Products: React.FC = () => {
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>(
    !!localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products") || "")
      : []
  );
  const [open, toggle] = useReducer((prev) => !prev, false);

  const handleClose = () => {
    toggle();
    setEditProduct(null);
  };

  const handleAddProduct = (product: Product) => {
    if (editProduct) {
      setProducts(
        products.map((prod) => (prod === editProduct ? product : prod))
      );
      toggle();
      setEditProduct(null);
    } else {
      setProducts([...products, product]);
      toggle();
    }
  };

  const handleDelete = (product: Product) => {
    setProducts((prevProduct) =>
      prevProduct.filter((prevProduct) => prevProduct !== product)
    );
  };

  const handleEdit = (product: Product) => {
    setEditProduct(product);
    toggle();
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <Container maxWidth="xl">
      <Button variant="outlined" color="secondary" onClick={toggle}>
        Add new product
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <Form onSubmit={handleAddProduct} initial={editProduct} />
      </Dialog>
      <ProductsList
        onDeleteProduct={handleDelete}
        onEditProduct={handleEdit}
        list={products}
      />
    </Container>
  );
};

export default Products;
