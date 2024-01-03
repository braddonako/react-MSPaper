import LayoutOne from "./layouts/LayoutOne";
import LayoutThree from "./layouts/LayoutThree";
import LayoutTwo from "./layouts/LayoutTwo";
import '../styles.css';
import CustomButton from "./buttons/button";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { RootState } from '../state/store';



const SelectLayout = () => {
    const selectedContainerId = useSelector((state: RootState) => state.containers.selectedContainerId);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/editLayoutPage', { state: { id: selectedContainerId } });
    };



    // In a enterprise level project, I would make each of the strings a key value pair for localization. I am not sure you all support this currently,
    // But it is good to have in the future
    return <div>
        <h1>Select a layout for your single page webpage</h1>

        <p>When choosing your layout there are several things you can customize:</p>
        <ul>
            <li>The background color, or you can use a large image for the background</li>
            <li>Each container block can an image or a custom text</li>
            <li>Any text block can contain a background image or color</li>
        </ul>
        <div className="SelectLayoutDiv">
            <LayoutOne />
            <LayoutTwo />
            <LayoutThree />
        </div>
        <div style={{ textAlign: 'right', paddingRight: '50px', paddingTop: '50px' }}>
            <CustomButton onClick={() => handleClick()} text="NEXT" />
        </div>

    </div>
};

export default SelectLayout;