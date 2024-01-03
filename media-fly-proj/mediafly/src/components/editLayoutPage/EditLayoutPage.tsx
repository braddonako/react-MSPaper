
import styled from 'styled-components';
import Header from './Header';
import '../../styles.css';
import Column from './Columns';
import ImageUploadButton from '../buttons/ImageUploadButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { ColumnOneContent } from './ColumnOneContent';

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
    const selectedImage = useSelector((state: RootState) => state.background.backgroundImage);
    return (
        <AppContainer>
            <Header />
            <ColumnsContainer>
                <Column flex={2}><div>{ColumnOneContent()}</div></Column>
                <Column flex={7}> <div className="image-container">
                    <div style={{ flex: 1 }}>
                        {selectedImage && (
                            <div
                                style={{
                                    backgroundImage: `url(${selectedImage})`,
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '100vh',
                                }}
                            >
                            </div>
                        )}
                    </div>
                </div></Column>
                <Column flex={2}><div><ImageUploadButton /></div></Column>
            </ColumnsContainer>
        </AppContainer>
    );
}

export default EditLayoutPage;