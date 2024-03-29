import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSquareProperty, SquareProperty } from '../../state/grid/gridSlice';
import { FaUpload } from 'react-icons/fa'; // Assuming you have a library like react-icons for the upload icon
import ClearSquarePropertyButton from './ClearSquarePropertyButton';

const ImageUploader: React.FC = () => {
    const dispatch = useDispatch();
    const [, setSelectedImage] = useState<File | null>(null);
    const { highlightedSection } = useSelector((state: { grid: { highlightedSection: string } }) => state.grid);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSelectedImage(file || null);


        if (file) {
            const imageUrl = URL.createObjectURL(file);
            dispatch(setSquareProperty({ squareId: highlightedSection, property: SquareProperty.Image, value: imageUrl, }));
        }
    };

    return (
        <div className="column-three-container">
            <>
                <label htmlFor="fileInput" className="label-container">
                    <FaUpload size={50} className="upload-icon" />
                    <div className="upload-text">Click to upload an image</div>
                </label>
            </>

            <div className="file-input-container">
                <input id="fileInput" type="file" onChange={handleImageChange} className="file-input" />
            </div>
            <div><ClearSquarePropertyButton squareId={highlightedSection} property={SquareProperty.Image} /></div>
        </div>
    );
};

export default ImageUploader;