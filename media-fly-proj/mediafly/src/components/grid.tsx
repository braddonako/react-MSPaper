import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGrid } from '../state/grid/gridSlice';
import { RootState } from '../state/store';
import '../styles.css'
import { render } from '@testing-library/react';

interface GridProps {
    layout: { rows: number; columns: number[] };
    isEditMode: boolean
}

const Grid: React.FC<GridProps> = ({ layout, isEditMode }) => {
    const dispatch = useDispatch();
    const { highlightedSection } = useSelector((state: { grid: { highlightedSection: string } }) => state.grid);
    const backgroundImageURL = useSelector((state: RootState) => state.background.backgroundImage);

    useEffect(() => {
        dispatch(setGrid(layout));
    }, [dispatch, layout]);

    const renderGridItems = () => {
        return Array.from({ length: layout.rows }, (_, rowIndex) => (

            <div key={rowIndex} style={{ display: 'flex' }}>
                {Array.from({ length: layout.columns[rowIndex] }, (_, colIndex) => (
                    <div
                        key={colIndex}
                        className={`grid-item ${highlightedSection === `column${colIndex + 1}row${rowIndex + 1}` ? 'highlighted' : ''}`}
                        style={{ flex: 1, border: '1px solid black', padding: '10px', height: '100px', margin: '14px' }}
                    >
                    </div>
                ))}
            </div>

        ));
    };

    const conditionalStyle = isEditMode
        ? {
            backgroundImage: `url(${backgroundImageURL})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
        }
        : {};

    return (
        <div
            className={`background ${highlightedSection === 'background' ? 'highlighted' : ''}`}
            style={conditionalStyle}
        >
            {renderGridItems()}
        </div>
    );

};

export default Grid;