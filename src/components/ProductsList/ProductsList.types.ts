import { Product } from "containers/Products/Product.types";

export interface ProductsListProps {
  list: Product[];
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (product: Product) => void;
}
