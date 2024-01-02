import SelectLayoutContainer from './selectLayoutContainer';
import '../../styles.css';


const LayoutOne = () => {
    return <div>
        <SelectLayoutContainer><Grid /></SelectLayoutContainer>
    </div>
};



const Grid = () => (


    <div className="SelectContainer">
        {/* Header */}
        <div style={{ gridRow: '1', gridColumn: '1 / span 2', border: '1px solid #ccc', textAlign: 'center', fontSize: '24px', padding: '20px' }}>
            Header
        </div>

        {/* First Column */}
        <div style={{ gridRow: '2', gridColumn: '1', border: '1px solid #ccc', padding: '60px' }}>
            Column 1
        </div>

        {/* Second Column */}
        <div style={{ gridRow: '2', gridColumn: '2', border: '1px solid #ccc', padding: '60px' }}>
            Column 2
        </div>
    </div>
);

export default LayoutOne;