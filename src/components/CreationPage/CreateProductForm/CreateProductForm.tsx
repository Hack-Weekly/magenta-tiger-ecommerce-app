import React, { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  Title,
  Label,
  Input,
  Textarea,
  Button,
  FileUploadWrapper,
  ImagePreview,
  SubTitle,
  ErrorMessage,
} from './CreateProductForm.styles';
import { Product } from '../../../types/Product.types';
import { createProduct } from '@/firebase/product/products';

// Dummy data for testing, REMOVE later
const user = {
  displayName: 'Marcus Aurelius',
  photoURL: 'https://avatars.githubusercontent.com/u/111042761?v=4',
  uid: 'abc123',
};

const CreateProductForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isCreatingProduct, seIsCreatingProduct] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [productState, setProductState] = useState<Product>({
    id: nanoid(),
    title: '',
    description: '',
    price: '',
    image: null,
    metadata: {
      author: {
        name: user?.displayName,
        photoUrl: user?.photoURL,
        uid: user?.uid,
      },
      createdAt: Date.now(),
    },
  });

  const imagePreviewURL = image ? URL.createObjectURL(image) : undefined;

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setProductState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!image) {
      setErrorMessage('Please, select image');
    } else if (user && image) {
      try {
        seIsCreatingProduct(true);

        await createProduct(productState, image);
        console.log('created');

        // Cleaning form after successful creating
        setProductState({
          id: nanoid(),
          title: '',
          description: '',
          price: '',
          image: null,
          metadata: {
            author: {
              name: user?.displayName,
              photoUrl: user?.photoURL,
              uid: user?.uid,
            },
            createdAt: Date.now(),
          },
        });
        setImage(null);
        seIsCreatingProduct(false);
      } catch (err: any) {
        setErrorMessage(err);
        seIsCreatingProduct(false);
        console.log(err);
      }
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const imageFile = event.target.files[0];

      setImage(imageFile);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create Product</Title>

      <Label htmlFor="title">Title:</Label>
      <Input
        value={productState.title}
        type="text"
        name="title"
        required
        onChange={handleFormChange}
      />

      <Label htmlFor="description">Description:</Label>
      <Textarea
        value={productState.description}
        name="description"
        required
        onChange={handleFormChange}
      />

      <Label htmlFor="price">Price:</Label>
      <Input
        value={productState.price}
        type="number"
        name="price"
        min="0"
        step="0.01"
        required
        onChange={handleFormChange}
      />

      <FileUploadWrapper>
        <Label htmlFor="image">Image:</Label>
        <Button onClick={() => fileInputRef.current?.click()}>
          {image ? 'Upload another image' : 'Upload image'}
        </Button>
        <Input
          ref={fileInputRef}
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />

        <SubTitle>
          {image ? `Uploaded: ${image.name}` : `There are no images selected`}
        </SubTitle>

        {image && <ImagePreview src={imagePreviewURL} />}
      </FileUploadWrapper>
      {errorMessage.length !== 0 && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button
        type="submit"
        disabled={
          !productState.title?.length ||
          !productState.description?.length ||
          !productState.price?.length ||
          image === null
        }
      >
        {isCreatingProduct ? 'Creating product' : 'Create product'}
      </Button>
    </Form>
  );
};

export { CreateProductForm };
