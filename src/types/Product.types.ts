export type Product = {
  id?: string;
  title?: string;
  description?: string;
  price?: string;
  image?: null | string;
  metadata: {
    author: {
      name?: string;
      photoUrl?: string;
      uid?: string;
    };
    createdAt?: number;
  };
};
