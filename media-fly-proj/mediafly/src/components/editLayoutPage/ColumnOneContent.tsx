import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setHighlightedSection } from '../../state/editLayout/highlightSlice';
import Button from '../buttons/button';
import { RootState } from '../../state/store';
import '../../styles.css';

const sections = ['background', 'header', 'column1', 'column2', 'column3', 'footer'];

type Layouts = {
    [key: string]: React.ReactNode;
};


export function ColumnOneContent() {
    const location = useLocation();
    const dispatch = useDispatch();
    const highlightedSection = useSelector((state: RootState) => state.highlight.highlightedSection);

    const handleButtonClick = (section: string) => {
        dispatch(setHighlightedSection(section));
    };

    const renderColumnOne = () => {
        const layouts: Layouts = {
            '1': layoutOne(),
            '2': layoutTwo(),
            '3': layoutThree(),
        };
        return <div>{layouts[location.state.id]}</div>;
    };

    const generateSquareColumns = (numColumns: number) => {
        const columns = [];
        for (let i = 1; i <= numColumns; i++) {
            columns.push(
                <div
                    key={`column${i}`}
                    className={`square-column ${highlightedSection === `column${i}` ? 'highlighted' : ''}`}
                />
            );
        }
        return columns;
    };

    const generateButtons = () => {
        return sections.map((section) => (
            <Button key={section} text={section.charAt(0).toUpperCase() + section.slice(1)} onClick={() => handleButtonClick(section)} />
        ));
    };

    const generateLayout = (numColumns: number, hasFooter = false) => {
        return (
            <div>
                <div className={`container ${highlightedSection === 'background' ? 'highlighted' : ''}`}>
                    <div className={`header ${highlightedSection === 'header' ? 'highlighted' : ''}`} />
                    <div className="columns-container">
                        {generateSquareColumns(numColumns)}
                        {hasFooter && <div className={`footer ${highlightedSection === 'footer' ? 'highlighted' : ''}`} />}
                    </div>
                </div>

                <div className="vertical-buttons">{generateButtons()}</div>
            </div>
        );
    };

    const layoutOne = () => generateLayout(2);
    const layoutTwo = () => generateLayout(3);
    const layoutThree = () => generateLayout(2, true);

    return renderColumnOne();
}