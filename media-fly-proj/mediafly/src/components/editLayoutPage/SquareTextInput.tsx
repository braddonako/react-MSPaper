import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSquareText } from '../../state/grid/gridSlice'; // Import your grid slice actions
import CustomButton from '../buttons/button';

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
        dispatch(setSquareText({ squareId, text: inputValue }));
    };

    const handleButtonClick = () => {
        // Dispatch the setSquareText action when the button is clicked
        dispatch(setSquareText({ squareId, text: inputValue }));
    };

    return (
        <div className="upload-container">
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
        </div>
    );
};

export default SquareTextInput;