import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGrid } from '../state/grid/gridSlice';
import { RootState } from '../state/store';
import '../styles.css'

interface GridProps {
    layout: { rows: number; columns: number[] };
    isEditMode: boolean
}

const Grid: React.FC<GridProps> = ({ layout, isEditMode }) => {
    const dispatch = useDispatch();
    const { highlightedSection, squareImages, squareTexts, squareColors } = useSelector((state: RootState) => state.grid);


    useEffect(() => {
        dispatch(setGrid(layout));
    }, [dispatch, layout]);



    const renderGridItems = () => {
        console.log(squareColors);
        const gridContainerStyle = {
            backgroundImage: isEditMode ? `url(${squareImages['grid-container'] || ''})` : 'none',
            backgroundSize: 'cover',
            backgroundColor: isEditMode ? `#${squareColors['grid-container'].replace('#', '')}` : '',
        };
        return (
            <div className={`grid-container ${(highlightedSection === 'grid-container' || highlightedSection === "") ? 'highlighted' : ''}`} style={gridContainerStyle}>
                {Array.from({ length: layout.rows }, (_, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex' }}>
                        {Array.from({ length: layout.columns[rowIndex] }, (_, colIndex) => {
                            const squareId = `column${colIndex + 1}row${rowIndex + 1}`;
                            const squareImageUrl = squareImages[squareId] || '';
                            const squareText = squareTexts[squareId] || '';
                            const squareColor = squareColors[squareId] || '';


                            return (
                                <div
                                    key={colIndex}
                                    className={`grid-item ${highlightedSection === squareId ? 'highlighted' : ''}`}
                                    style={{
                                        flex: 1,
                                        border: `${highlightedSection === squareId ? 'highlighted' : ''}`,
                                        padding: '10px',
                                        height: isEditMode ? '200px' : '100px',
                                        width: isEditMode ? '100%' : '75px',
                                        margin: '14px',
                                        backgroundImage: isEditMode ? `url(${squareImageUrl})` : 'none',
                                        backgroundSize: 'cover',
                                        backgroundColor: isEditMode ? `#${squareColor.replace('#', '')}` : '',
                                    }}
                                >{isEditMode ? squareText && <p>{squareText}</p> : ''}</div>
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