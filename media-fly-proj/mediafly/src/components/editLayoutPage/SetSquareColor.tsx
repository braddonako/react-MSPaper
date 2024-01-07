import React, { useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { HexColorPicker } from 'react-colorful';
import { SquareProperty, clearSquareProperty, setSquareProperty } from '../../state/grid/gridSlice';
import CustomButton from '../buttons/button';
import ClearSquarePropertyButton from '../buttons/ClearSquarePropertyButton';



interface ColorInputProps {
    squareId: string;
}

const ColorInput: React.FC<ColorInputProps> = ({ squareId }) => {
    const dispatch = useDispatch();
    const [color, setColor] = useState<string>('');

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            updateColor();
            dispatch(clearSquareProperty({ squareId, property: SquareProperty.Image }));
        }
    };

    const updateColor = () => {
        console.log(squareId);
        const formattedColor = color.startsWith('#') ? color : `#${color}`;
        dispatch(setSquareProperty({ squareId, property: SquareProperty.Color, value: formattedColor }));
        dispatch(clearSquareProperty({ squareId, property: SquareProperty.Image }));
    };

    return (
        <div className="column-three-container color">
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
            <ClearSquarePropertyButton squareId={squareId} property={SquareProperty.Color} />
        </div>
    );
};

export default ColorInput;