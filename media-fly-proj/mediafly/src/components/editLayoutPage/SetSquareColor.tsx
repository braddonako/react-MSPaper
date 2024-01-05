import React, { useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setSquareColor } from '../../state/grid/gridSlice'; // Replace with the correct path to your grid slice
import { HexColorPicker } from 'react-colorful';
import { clearSquareImage } from '../../state/grid/gridSlice';
import CustomButton from '../buttons/button';



interface ColorInputProps {
    squareId: string;
}

const ColorInput: React.FC<ColorInputProps> = ({ squareId }) => {
    const dispatch = useDispatch();
    const [color, setColor] = useState<string>('');

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            updateColor();
            dispatch(clearSquareImage(squareId));
        }
    };

    const updateColor = () => {
        const formattedColor = color.startsWith('#') ? color : `#${color}`;

        dispatch(setSquareColor({ squareId, color: formattedColor }));
        dispatch(clearSquareImage(squareId));
    };

    return (
        <div className="upload-container">
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
                style={{
                    marginTop: '10px',
                    padding: '8px',
                    fontSize: '16px',
                    width: '200px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                }}
            />
            <CustomButton
                onClick={updateColor}
                text='Update Color'
            />
        </div>
    );
};

export default ColorInput;