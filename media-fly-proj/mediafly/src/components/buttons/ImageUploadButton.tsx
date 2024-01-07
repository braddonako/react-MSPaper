import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSquareProperty } from '../../state/grid/gridSlice';
import { FaUpload } from 'react-icons/fa'; // Assuming you have a library like react-icons for the upload icon

const ImageUploader: React.FC = () => {
    const dispatch = useDispatch();
    const [, setSelectedImage] = useState<File | null>(null);
    const { highlightedSection } = useSelector((state: { grid: { highlightedSection: string } }) => state.grid);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSelectedImage(file || null);

        if (file) {
            console.log(highlightedSection);
            const imageUrl = URL.createObjectURL(file);
            dispatch(setSquareProperty({ squareId: highlightedSection, property: "image", value: imageUrl, }));
        }
    };

    return (
        <div className="upload-container">
            <>
                <label htmlFor="fileInput" className="label-container">
                    <FaUpload size={50} className="upload-icon" />
                    <div className="upload-text">Click to upload an image</div>
                </label>
            </>

            <div className="file-input-container">
                <input id="fileInput" type="file" onChange={handleImageChange} className="file-input" />
            </div>
        </div>
    );
};

export default ImageUploader;