import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBackgroundImage, selectBackgroundImage } from '../../state/imagePicker/backgroundImageSlice';

const ImageUploader: React.FC = () => {
    const dispatch = useDispatch();
    const backgroundImage = useSelector(selectBackgroundImage);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSelectedImage(file || null);

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            dispatch(setBackgroundImage(imageUrl));
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