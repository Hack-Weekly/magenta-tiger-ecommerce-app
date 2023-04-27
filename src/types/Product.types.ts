export type Product = {
  id?: string;
  title?: string;
  description?: string;
  price?: string;
  images?: null | string;
  metadata: {
    author: {
      name?: string;
      photoUrl?: string;
      uid?: string;
    };
    createdAt?: number;
    lastModifiedAt: number;
  };
};
