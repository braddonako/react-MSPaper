
import styled from 'styled-components';
import Header from './Header';
import '../../styles.css';
import Column from './Columns';
import ImageUploadButton from '../buttons/ImageUploadButton';
import ColumnOneContent from './ColumnOneContent';
import ColumnTwoContent from './ColumnTwoContent';
import { useLocation } from 'react-router-dom';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ColumnsContainer = styled.div`
  display: flex;
  flex: 1;
`;

function EditLayoutPage() {
  const location = useLocation();

  return (
    <AppContainer>
      <Header />
      <ColumnsContainer>
        <Column flex={2}><ColumnOneContent layout={location.state.layout} /></Column>
        <Column flex={7}><ColumnTwoContent layout={location.state.layout} /> </Column>
        <Column flex={2}><ImageUploadButton /></Column>
      </ColumnsContainer>
    </AppContainer>
  );
}

export default EditLayoutPage;