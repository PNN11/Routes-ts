import { Product } from "../../containers/Products/Product.types";
export interface FormValues extends Product {}
export interface FormProps {
  initial?: Product | null;
  onSubmit: (data: Product) => void;
}
