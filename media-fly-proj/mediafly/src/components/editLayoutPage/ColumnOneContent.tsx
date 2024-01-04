import Grid from '../grid';
import { useDispatch } from 'react-redux';
import { setHighlightedSection } from '../../state/grid/gridSlice';

interface ColumnOneContentProps {
    layout: { rows: number; columns: number[] };
}

const ColumnOneContent: React.FC<ColumnOneContentProps> = ({ layout }) => {
    const dispatch = useDispatch();

    const handleButtonClick = (rowIndex: number, colIndex: number, isBackground: boolean = false) => {
        const sectionIdentifier = isBackground ? 'background' : `column${colIndex + 1}row${rowIndex + 1}`;
        dispatch(setHighlightedSection(sectionIdentifier));
    };

    const renderButtons = () => {
        // Button for highlighting the background container
        const backgroundButton = (
            <button
                key="button-background"
                onClick={() => handleButtonClick(0, 0, true)} // You can choose any default values for rowIndex and colIndex
            >
                Highlight Background
            </button>
        );

        const buttons: JSX.Element[] = [backgroundButton];

        for (let rowIndex = 0; rowIndex < layout.rows; rowIndex++) {
            for (let colIndex = 0; colIndex < layout.columns[rowIndex]; colIndex++) {
                buttons.push(
                    <button
                        key={`button-column${colIndex + 1}-row${rowIndex + 1}`}
                        onClick={() => handleButtonClick(rowIndex, colIndex)}
                    >
                        {`Highlight Column ${colIndex + 1} Row ${rowIndex + 1}`}
                    </button>
                );
            }
        }
        return buttons;
    };

    return <div><Grid layout={layout} isEditMode={false} /> <div className='vertical-buttons'>{renderButtons()}</div></div>
};

export default ColumnOneContent;