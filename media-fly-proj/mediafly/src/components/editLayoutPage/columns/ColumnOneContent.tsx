import Grid from '../../grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHighlightedSection } from '../../../state/grid/gridSlice';

interface ColumnOneContentProps {
    layout: { rows: number; columns: number[] };
}

const ColumnOneContent: React.FC<ColumnOneContentProps> = ({ layout }) => {
    const highlightedSection = useSelector((state: { grid: { highlightedSection: string } }) => state.grid.highlightedSection);

    const dispatch = useDispatch();

    useEffect(() => {
        handleButtonClick(0, 0, true);
    }, []);

    const handleButtonClick = (rowIndex: number, colIndex: number, isBackground: boolean = false) => {
        const sectionIdentifier = isBackground ? 'grid-container' : `column${colIndex + 1}row${rowIndex + 1}`;
        dispatch(setHighlightedSection(sectionIdentifier));
    };

    const renderButtons = () => {
        const backgroundButton = (

            <button
                key="button-background"
                onClick={() => handleButtonClick(0, 0, true)}
                className={highlightedSection === 'grid-container' ? 'highlighted' : ''}
            >
                Background
            </button>
        );

        const buttons: JSX.Element[] = [backgroundButton];

        for (let rowIndex = 0; rowIndex < layout.rows; rowIndex++) {
            for (let colIndex = 0; colIndex < layout.columns[rowIndex]; colIndex++) {
                const sectionIdentifier = `column${colIndex + 1}row${rowIndex + 1}`;
                buttons.push(
                    <button
                        key={`button-${sectionIdentifier}`}
                        onClick={() => handleButtonClick(rowIndex, colIndex)}
                        className={highlightedSection === sectionIdentifier ? 'highlighted' : ''}
                    >
                        {`Column ${colIndex + 1} Row ${rowIndex + 1}`}
                    </button>
                );
            }
        }

        return buttons;
    };

    return <div><Grid layout={layout} isEditMode={false} /> <div className='vertical-buttons'>{renderButtons()}</div></div>
};

export default ColumnOneContent;