import React from 'react';
import { useDispatch } from 'react-redux';
import { clearSquareProperty } from '../../state/grid/gridSlice';

interface SquareControlsProps {
    squareId: string;
}

const SquareControls: React.FC<SquareControlsProps> = ({ squareId }) => {
    const dispatch = useDispatch();

    const handleClearImage = () => {
        dispatch(clearSquareProperty({ squareId, property: "image" }));
    };

    const handleClearText = () => {
        dispatch(clearSquareProperty({ squareId, property: 'text' }));
    };

    const handleClearColor = () => {
        dispatch(clearSquareProperty({ squareId, property: 'color' }));
    };

    return (
        <div>
            <button onClick={handleClearImage}>Clear Image</button>
            <button onClick={handleClearText}>Clear Text</button>
            <button onClick={handleClearColor}>Clear Color</button>
        </div>
    );
};

export default SquareControls;