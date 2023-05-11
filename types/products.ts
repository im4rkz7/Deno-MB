export type ProductToAdd = {
  name: string;
  price: number;
}

export type ProductToUpdate = ProductToAdd & {
  _id: string;
}

export type Product = ProductToAdd & {
  _id: { $oid: string },
};