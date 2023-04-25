export type Product = {
  id?: string;
  title?: string;
  description?: string;
  price?: string;
  image?: null | File;
  metadata: {
    author: {
      name?: string;
      photoUrl?: string;
      uid?: string;
    };
    createdAt?: number;
  };
};
