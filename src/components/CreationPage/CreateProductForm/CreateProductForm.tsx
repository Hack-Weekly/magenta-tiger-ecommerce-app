import React, { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledTitle,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledButton,
  StyledFileUploadWrapper,
  StyledImagePreview,
  StyledSubTitle,
  StyledErrorMessage,
  StyledImagesWrapper,
  StyledRemoveButton,
  StyledImagePreviewWrapper,
} from './StyledCreateProductForm.styles';
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
    images: null,
    metadata: {
      author: {
        name: user?.displayName,
        photoUrl: user?.photoURL,
        uid: user?.uid,
      },
      createdAt: Date.now(),
      lastModifiedAt: Date.now(),
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
          images: null,
          metadata: {
            author: {
              name: user?.displayName,
              photoUrl: user?.photoURL,
              uid: user?.uid,
            },
            createdAt: Date.now(),
            lastModifiedAt: Date.now(),
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
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle>Create Product</StyledTitle>

      <StyledLabel htmlFor="title">Title:</StyledLabel>
      <StyledInput
        value={productState.title}
        type="text"
        name="title"
        required
        onChange={handleFormChange}
        placeholder="Enter title"
      />

      <StyledLabel htmlFor="description">Description:</StyledLabel>
      <StyledTextarea
        value={productState.description}
        name="description"
        required
        onChange={handleFormChange}
        placeholder="Enter Description"
      />

      <StyledLabel htmlFor="price">Price:</StyledLabel>
      <StyledInput
        value={productState.price}
        type="number"
        name="price"
        min="0"
        step="0.01"
        required
        onChange={handleFormChange}
        placeholder="Enter Price"
      />

      <StyledFileUploadWrapper>
        <StyledLabel htmlFor="image">Image:</StyledLabel>
        <StyledSubTitle>Maximum 5 images to upload</StyledSubTitle>
        <StyledButton
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={images !== null && images.length > 4 && isCreatingProduct}
        >
          {images ? 'Upload another image' : 'Upload image'}
        </StyledButton>

        <StyledInput
          ref={fileInputRef}
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />
      </StyledFileUploadWrapper>

      {images && (
        <StyledImagesWrapper>
          {images.map((image, index) => {
            return (
              <StyledImagePreviewWrapper key={index}>
                <StyledRemoveButton
                  type="button"
                  title="Remove image"
                  onClick={() => handleImageRemove(index)}
                  disabled={isCreatingProduct}
                >
                  <Icon icon={faRemove} />
                </StyledRemoveButton>
                <StyledImagePreview
                  src={URL.createObjectURL(image)}
                  alt=""
                ></StyledImagePreview>
              </StyledImagePreviewWrapper>
            );
          })}
        </StyledImagesWrapper>
      )}

      {errorMessage.length !== 0 && (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      )}
      <StyledButton
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
      </StyledButton>
    </StyledForm>
  );
};

export { CreateProductForm };
