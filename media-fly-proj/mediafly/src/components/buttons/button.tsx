import React, { FC } from 'react';

interface CustomButtonProps {
    onClick: () => void;
    disabled?: boolean;
    text: string;
}

const CustomButton: FC<CustomButtonProps> = ({ onClick, disabled, text }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{
                padding: '10px',
                fontSize: '16px',
                backgroundColor: disabled ? '#333' : '#000',
                color: '#fff',
                cursor: disabled ? 'not-allowed' : 'pointer',
                border: 'none',
                borderRadius: '16px',
                marginRight: '10px',
            }}
        >
            {text}
        </button>
    );
};

export default CustomButton;