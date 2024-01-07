import React from 'react';
import { useDispatch } from 'react-redux';
import { SquareProperty, clearSquareProperty } from '../../state/grid/gridSlice';
import CustomButton from './button';

interface ClearSquarePropertyButtonProps {
    squareId: string;
    property: SquareProperty
}

const ClearSquarePropertyButton: React.FC<ClearSquarePropertyButtonProps> = ({ squareId, property }) => {
    const dispatch = useDispatch();

    const handleClearImage = () => {
        dispatch(clearSquareProperty({ squareId, property: SquareProperty.Image }));
    };

    const handleClearText = () => {
        dispatch(clearSquareProperty({ squareId, property: SquareProperty.Text }));
    };

    const handleClearColor = () => {
        console.log(squareId);
        dispatch(clearSquareProperty({ squareId, property: SquareProperty.Color }));
    };

    const renderButtons = () => {
        if (property === SquareProperty.Image) {
            return <CustomButton onClick={handleClearImage} text='Clear Image' />
        } else if (property === SquareProperty.Color) {
            return <CustomButton onClick={handleClearColor} text='Clear Color' />
        } else {
            return <CustomButton onClick={handleClearText} text='Clear Text' />

        }
    }

    return (
        <div>
            {renderButtons()}
        </div>
    );
};

export default ClearSquarePropertyButton;