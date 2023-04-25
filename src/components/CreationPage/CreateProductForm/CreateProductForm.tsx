import React from 'react';
import {
  Form,
  Title,
  Label,
  Input,
  Textarea,
  Button,
} from './CreateProductForm.styles';

const CreateProductForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create Product</Title>
      <Label htmlFor="title">Title:</Label>
      <Input type="text" id="title" name="title" required />

      <Label htmlFor="description">Description:</Label>
      <Textarea id="description" name="description" required></Textarea>

      <Label htmlFor="price">Price:</Label>
      <Input
        type="number"
        id="price"
        name="price"
        min="0"
        step="0.01"
        required
      />

      <Label htmlFor="image">Image:</Label>
      <Input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleImageUpload}
        required
      />

      <Button type="submit">Create Product</Button>
    </Form>
  );
};

export { CreateProductForm };
