import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Column from './Columns';
import LayoutOne from '../layouts/LayoutOne';
import LayoutTwo from '../layouts/LayoutTwo';
import LayoutThree from '../layouts/LayoutThree';
import ImageUploadButton from '../buttons/ImageUploadButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

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

    const selectedImage = useSelector((state: RootState) => state.background.backgroundImage);

    const renderColumnOne = () => {
        let columnOne;
        if (location.state.id === 1) {
            columnOne = <div><LayoutOne /></div>
        } else if (location.state.id === 2) {
            columnOne = <LayoutTwo />
        } else if (location.state.id === 3) {
            columnOne = <LayoutThree />
        }
        return columnOne;
    }

    console.log(selectedImage + 'hey');


    return (
        <AppContainer>
            <Header />
            <ColumnsContainer>
                <Column flex={2}>{renderColumnOne()}</Column>
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