import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  height: 100%;
  max-width: 30rem;
  input,
  textarea {
    font-family: 'Inter', sans-serif;
    width: 100%;
    border-radius: 0.2rem;
    border: 0.1rem solid #d9d9d9;
    padding: 0.2rem 0.5rem;
    ::placeholder {
      font-size: 0.9rem;
      letter-spacing: -0.01rem;
      color: #9b9b9b;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Works for Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

const StyledTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  color: #2c2c2c;
`;

const StyledLabel = styled.label`
  color: #5e5e5e;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
`;

const StyledInput = styled.input`
  &:focus {
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`
  min-width: 100%;
  resize: vertical;

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
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

const StyledFileUploadWrapper = styled.div`
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
    &:disabled {
      background-color: #cacaca;
      cursor: default;
    }
  }
  input {
    display: none;
  }
`;

const StyledImagesWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const StyledImagePreviewWrapper = styled.div`
  position: relative;
  height: 5rem;
  width: 5rem;
`;

const StyledImagePreview = styled.img`
  max-width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 0.4rem;
  z-index: 1;
  background-color: #dbdbdb4f;
`;

const StyledRemoveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #eee !important;
  color: #2c2c2c;
  left: 0.2rem;
  top: 0.2rem;
  height: 1.5rem;
  width: 1.5rem;
  padding: 0 !important;
  margin: 0 !important;
  z-index: 2;
  border-radius: 50%;
`;

const StyledSubTitle = styled.p`
  color: #5e5e5e;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 300;
`;

const StyledErrorMessage = styled.p`
  color: #d23c3c;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export {
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
};
