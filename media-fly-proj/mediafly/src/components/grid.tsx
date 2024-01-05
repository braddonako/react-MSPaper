import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGrid, setHighlightedSection, setSquareImage } from '../state/grid/gridSlice';
import { RootState } from '../state/store';
import '../styles.css'

interface GridProps {
    layout: { rows: number; columns: number[] };
    isEditMode: boolean
}

const Grid: React.FC<GridProps> = ({ layout, isEditMode }) => {
    const dispatch = useDispatch();
    const { highlightedSection, squareImages } = useSelector((state: RootState) => state.grid);


    useEffect(() => {
        dispatch(setGrid(layout));
    }, [dispatch, layout]);

    const handleSquareClick = (rowIndex: number, colIndex: number) => {
        const squareId = `column${colIndex + 1}row${rowIndex + 1}`;
        dispatch(setHighlightedSection(squareId));

        const selectedImageUrl = 'your_selected_image_url';
        dispatch(setSquareImage({ squareId, imageUrl: selectedImageUrl }));
    };

    const renderGridItems = () => {
        return (
            <div className={`grid-container ${highlightedSection === 'grid-container' ? 'highlighted' : ''}`}>
                {Array.from({ length: layout.rows }, (_, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex' }}>
                        {Array.from({ length: layout.columns[rowIndex] }, (_, colIndex) => {
                            const squareId = `column${colIndex + 1}row${rowIndex + 1}`;
                            const squareImageUrl = squareImages[squareId] || '';

                            return (
                                <div
                                    key={colIndex}
                                    onClick={() => handleSquareClick(rowIndex, colIndex)}
                                    className={`grid-item ${highlightedSection === squareId ? 'highlighted' : ''}`}
                                    style={{
                                        flex: 1,
                                        border: '1px solid black',
                                        padding: '10px',
                                        height: isEditMode ? '200px' : '100px',
                                        width: isEditMode ? '100%' : '75px',
                                        margin: '14px',
                                        backgroundImage: isEditMode ? `url(${squareImageUrl})` : 'none',
                                        backgroundSize: 'cover',
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                ))}
            </div>
        );
    };


    return (
        <div
        >
            {renderGridItems()}
        </div>
    );
};

export default Grid;