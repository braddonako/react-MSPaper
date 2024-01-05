
import styled from 'styled-components';
import Header from './Header';
import '../../styles.css';
import Column from './columns/Columns';
import ColumnOneContent from './columns/ColumnOneContent';
import ColumnTwoContent from './columns/ColumnTwoContent';
import { useLocation } from 'react-router-dom';
import ColumnThreeContent from './columns/ColumnThreeContent';

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
        <Column flex={2}><ColumnThreeContent layout={location.state.layout} /></Column>
      </ColumnsContainer>
    </AppContainer>
  );
}

export default EditLayoutPage;