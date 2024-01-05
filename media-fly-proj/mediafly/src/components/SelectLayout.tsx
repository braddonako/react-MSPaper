import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../state/store';
import Layout from './layouts/Layout';
import '../styles.css';

const SelectLayout = () => {
    const selectedContainerId = useSelector((state: RootState) => state.containers.selectedContainerId);
    const navigate = useNavigate();

    const handleClick = (selectedLayout: any) => {
        navigate('/editLayoutPage', { state: { id: selectedContainerId, layout: selectedLayout } });
    };

    const layouts = [
        { rows: 2, columns: [1, 2], id: 1 },
        { rows: 2, columns: [1, 3], id: 2 },
        { rows: 3, columns: [1, 2, 1], id: 3 },
    ];

    return (
        <div>
            <h1>Select a layout for your single page webpage</h1>

            <p>When choosing your layout, there are several things you can customize:</p>
            <ul>
                <li>The background color, or you can use a large image for the background</li>
                <li>Each container block can have an image or custom text</li>
                <li>Any text block can contain a background image or color</li>
            </ul>

            <div className="SelectLayoutDiv">
                {layouts.map((layout) => (
                    <Layout key={layout.id} layout={layout} id={layout.id} onClick={() => handleClick(layout)} />
                ))}
            </div>

            <div style={{ textAlign: 'right', paddingRight: '50px', paddingTop: '50px' }}>

                {/* <CustomButton onClick={() => handleClick()} text="NEXT" /> */}
            </div>
        </div>
    );
};

export default SelectLayout;
