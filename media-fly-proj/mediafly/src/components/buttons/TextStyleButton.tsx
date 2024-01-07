import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSquareStyle } from '../../state/grid/gridSlice';
import { RootState } from '../../state/store';

interface StyleButtonProps {
    squareId: string;
}

const StyleButton: React.FC<StyleButtonProps> = ({ squareId }) => {
    const dispatch = useDispatch();
    const squareStyles = useSelector((state: RootState) => state.grid.squareStyles[squareId] || {});

    const handleStyleToggle = (styleType: keyof typeof squareStyles) => {
        const newValue = !squareStyles[styleType];
        dispatch(setSquareStyle({ squareId, [styleType]: newValue }));
    };

    return (
        <div>
            <button onClick={() => handleStyleToggle('italic')} style={{ fontStyle: squareStyles.italic ? 'italic' : 'normal' }}>
                Italic
            </button>
            <button onClick={() => handleStyleToggle('bold')} style={{ fontWeight: squareStyles.bold ? 'bold' : 'normal' }}>
                Bold
            </button>
            <button onClick={() => handleStyleToggle('underlined')} style={{ textDecoration: squareStyles.underlined ? 'underline' : 'none' }}>
                Underline
            </button>
        </div>
    );
};

export default StyleButton;