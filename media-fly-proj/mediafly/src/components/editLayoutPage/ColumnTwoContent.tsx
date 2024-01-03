import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

export function ColumnTwoContent() {
    const selectedImage = useSelector((state: RootState) => state.background.backgroundImage);
    return <div className="image-container">
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
    </div>
}