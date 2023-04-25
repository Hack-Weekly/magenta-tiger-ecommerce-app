import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  max-width: 30rem;
  input,
  textarea {
    width: 100%;
    border-radius: 0.2rem;
    border: 0.1rem solid #d9d9d9;
    padding: 0.2rem 0.5rem;
  }
`;

const Title = styled.h2``;

const Label = styled.label`
  color: #5e5e5e;
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  min-width: 100%;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #aa96da;
  padding: 0.3rem;
  color: #fff;
  border-radius: 0.4rem;
`;

export { Form, Title, Label, Input, Textarea, Button };
