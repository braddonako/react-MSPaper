import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSquareImage, setHighlightedSection } from '../../state/grid/gridSlice';

const ImageUploader: React.FC = () => {
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const { highlightedSection } = useSelector((state: { grid: { highlightedSection: string } }) => state.grid);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSelectedImage(file || null);


        if (file) {
            const imageUrl = URL.createObjectURL(file);
            dispatch(setSquareImage({ squareId: highlightedSection, imageUrl }));
        }

    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: '10px' }}>
                <input type="file" onChange={handleImageChange} />
            </div>
        </div>
    );
};

export default ImageUploader;
