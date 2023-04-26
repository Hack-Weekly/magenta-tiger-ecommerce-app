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
  ImagesWrapper,
  RemoveButton,
  ImagePreviewWrapper,
} from './CreateProductForm.styles';
import { Product } from '../../../types/Product.types';
import { createProduct } from '@/firebase/product/products';
import { Icon } from '@/components/Icon/Icon';
import { faCircleNotch, faRemove } from '@fortawesome/free-solid-svg-icons';

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
  const [images, setImages] = useState<File[] | null>(null);
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

    if (!images) {
      setErrorMessage('Please, select image');
    } else if (!user) {
      setErrorMessage('Please, sign up to account');
    } else if (user && images) {
      try {
        seIsCreatingProduct(true);

        await createProduct(productState, images);

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
        setImages(null);
        seIsCreatingProduct(false);
      } catch (err: any) {
        setErrorMessage(err.messsagge);
        seIsCreatingProduct(false);
        console.log(err);
      }
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const imageFile = event.target.files[0];

      if (!images) {
        setImages([imageFile]);
      } else if (images) {
        setImages((images) => images && [...images, imageFile]);
      }
    }
  };

  const handleImageRemove = (index: number) => {
    if (images?.length === 1) {
      setImages(null);
    } else {
      setImages((images) => {
        const newImages = images && [...images];
        newImages && newImages.splice(index, 1);
        return newImages;
      });
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
        placeholder="Enter title"
      />

      <Label htmlFor="description">Description:</Label>
      <Textarea
        value={productState.description}
        name="description"
        required
        onChange={handleFormChange}
        placeholder="Enter Description"
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
        placeholder="Enter Price"
      />

      <FileUploadWrapper>
        <Label htmlFor="image">Image:</Label>
        <SubTitle>Maximum 5 images to upload</SubTitle>
        <Button
          onClick={() => fileInputRef.current?.click()}
          disabled={images !== null && images.length > 4}
        >
          {images ? 'Upload another image' : 'Upload image'}
        </Button>

        <Input
          ref={fileInputRef}
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />
      </FileUploadWrapper>

      {images && (
        <ImagesWrapper>
          {images.map((image, index) => {
            return (
              <ImagePreviewWrapper key={index}>
                <RemoveButton
                  title="Remove image"
                  onClick={() => handleImageRemove(index)}
                >
                  <Icon icon={faRemove} />
                </RemoveButton>
                <ImagePreview
                  src={URL.createObjectURL(image)}
                  alt=""
                ></ImagePreview>
              </ImagePreviewWrapper>
            );
          })}
        </ImagesWrapper>
      )}

      {errorMessage.length !== 0 && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button
        type="submit"
        disabled={
          !user ||
          !productState.title?.length ||
          !productState.description?.length ||
          !productState.price?.length ||
          images === null ||
          isCreatingProduct
        }
      >
        {isCreatingProduct ? (
          <Icon icon={faCircleNotch} spinning="true" />
        ) : (
          'Create product'
        )}
      </Button>
    </Form>
  );
};

export { CreateProductForm };
