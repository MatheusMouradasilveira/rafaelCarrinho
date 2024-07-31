import { ProductDTO } from "./Product";

export type StackParamList = {
  Home: undefined;
  Details: {
    product: ProductDTO;
  };
};