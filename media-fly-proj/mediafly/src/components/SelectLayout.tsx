import LayoutOne from "./layouts/LayoutOne";
import LayoutThree from "./layouts/LayoutThree";
import LayoutTwo from "./layouts/LayoutTwo";
import '../styles.css';



const SelectLayout = () => {
    return <div>
        <h1>Select a layout for your single page webpage</h1>

        <p>When choosing your layout there are several things you can customize:</p>
        <ul>
            <li>The background color, or you can use a large image for the background</li>
            <li>Each container block can an image or a custom text</li>
            <li>Any text block can contain a background image or color</li>
        </ul>
        <div className="selectLayoutDiv">
            <LayoutOne />
            <LayoutTwo />
            <LayoutThree />
        </div>
    </div>
};

export default SelectLayout;