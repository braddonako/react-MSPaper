
import styled from 'styled-components';
import Header from './Header';
import '../../styles.css';
import Column from './Columns';
import ImageUploadButton from '../buttons/ImageUploadButton';
import { ColumnOneContent } from './ColumnOneContent';
import { ColumnTwoContent } from './ColumnTwoContent';

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
    return (
        <AppContainer>
            <Header />
            <ColumnsContainer>
                <Column flex={2}><div>{ColumnOneContent()}</div></Column>
                <Column flex={7}>{ColumnTwoContent()} </Column>
                <Column flex={2}><div><ImageUploadButton /></div></Column>
            </ColumnsContainer>
        </AppContainer>
    );
}

export default EditLayoutPage;