interface Product {
    readonly id: number;
    title: string;
    description?: string;
  }
  
  export const product: Product = {
    id: 1,
    title: "Tablet",
    description: "Compact and fast",
  };