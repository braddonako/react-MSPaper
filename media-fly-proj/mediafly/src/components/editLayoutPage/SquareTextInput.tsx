import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSquareProperty, SquareProperty } from '../../state/grid/gridSlice'; // Import your grid slice actions
import CustomButton from '../buttons/button';
import ClearSquarePropertyButton from '../buttons/ClearSquarePropertyButton';
import StyleButton from '../buttons/TextStyleButton';

interface SquareTextInputProps {
    squareId: string;
}

const SquareTextInput: React.FC<SquareTextInputProps> = ({ squareId }) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleInputBlur = () => {
        dispatch(setSquareProperty({ squareId, property: SquareProperty.Text, value: inputValue }));
    };

    const handleButtonClick = () => {
        dispatch(setSquareProperty({ squareId, property: SquareProperty.Text, value: inputValue }));
    };

    return (
        <div className="column-three-container text">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                placeholder={`Enter text for square ${squareId}`}
            />
            <CustomButton
                onClick={handleButtonClick}
                text='Update Text'
            />
            <StyleButton squareId={squareId} />
            <ClearSquarePropertyButton squareId={squareId} property={SquareProperty.Text} />

        </div>
    );
};

export default SquareTextInput;