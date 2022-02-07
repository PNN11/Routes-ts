import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductProps } from "./Product.types";

const Product: React.FC<ProductProps> = ({
  product,
  onEditProduct,
  onDeleteProduct,
}) => {
  const handleEditProduct = () => {
    onEditProduct(product);
  };
  const handleDeleteProduct = () => {
    onDeleteProduct(product);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDeleteProduct}>
          Delete
        </Button>
        <Button size="small" onClick={handleEditProduct}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
