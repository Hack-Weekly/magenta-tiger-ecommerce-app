import { CreateProductForm } from '@/components/CreationPage/CreateProductForm/CreateProductForm';
import {StyledContainer} from '@/components/StyledContainer/StyledContainer';

export default function Web() {
  return (
    <StyledContainer variant="create-page">
      <CreateProductForm />
    </StyledContainer>
  );
}
