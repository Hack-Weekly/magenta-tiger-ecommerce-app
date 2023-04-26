import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  max-width: 30rem;
  input,
  textarea {
    font-family: 'Inter', sans-serif;
    width: 100%;
    border-radius: 0.2rem;
    border: 0.1rem solid #d9d9d9;
    padding: 0.2rem 0.5rem;
  }
`;

const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  color: #2c2c2c;
`;

const Label = styled.label`
  color: #5e5e5e;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  min-width: 100%;
  resize: vertical;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  background-color: #aa96da;
  padding: 0.5rem;
  color: #fff;
  border-radius: 0.4rem;
  &:hover,
  &:focus {
    background-color: #c7b5f4;
  }
  &:disabled {
    background-color: #cacaca;
    cursor: default;
  }
`;

const FileUploadWrapper = styled.div`
  width: 100%;
  display: grid;
  margin-bottom: 1rem;
  button {
    margin-top: 0.3rem;
    background-color: #b9ee5b;
    padding: 0.5rem;
    &:hover,
    &:focus {
      background-color: #c4f46e;
    }
  }
  input {
    display: none;
  }
`;

const ImagePreview = styled.img`
  max-width: 100%;
  width: 100%;
  max-height: 14rem;
  margin-top: 1rem;
  object-fit: contain;
  border-radius: 0.4rem;
`;

const SubTitle = styled.p`
  color: #5e5e5e;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  font-weight: 300;
`;

const ErrorMessage = styled.p`
  color: #d23c3c;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export {
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
};
