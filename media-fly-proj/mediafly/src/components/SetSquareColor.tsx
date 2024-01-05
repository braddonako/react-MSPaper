import React, { useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setSquareColor } from '../state/grid/gridSlice'; // Replace with the correct path to your grid slice
import { HexColorPicker } from 'react-colorful';
import { clearSquareImage } from '../state/grid/gridSlice';



interface ColorInputProps {
    squareId: string;
}

const ColorInput: React.FC<ColorInputProps> = ({ squareId }) => {
    const dispatch = useDispatch();
    const [color, setColor] = useState<string>('');

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            updateColor();
            dispatch(clearSquareImage());
        }
    };

    const updateColor = () => {
        dispatch(setSquareColor({ squareId, color }));
        dispatch(clearSquareImage());
    };

    return (
        <div>
            <HexColorPicker
                color={color}
                onChange={(selectedColor) => setColor(selectedColor)}
            />
            <input
                type="text"
                placeholder="Enter hex color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={updateColor}>Update Color</button>
        </div>
    );
};

export default ColorInput;