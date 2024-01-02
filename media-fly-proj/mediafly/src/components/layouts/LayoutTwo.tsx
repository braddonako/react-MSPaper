import SelectLayoutContainer from './selectLayoutContainer';
import '../../styles.css';


const LayoutTwo = () => {

    return <div>
        <SelectLayoutContainer><Grid /></SelectLayoutContainer>
    </div>
};


const Grid = () => (
    <div className="SelectContainer">
        {/* Header */}
        <div style={{ gridRow: '1', gridColumn: '1 / span 3', border: '1px solid #ccc', textAlign: 'center', fontSize: '24px' }}>
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

        {/* Third Column (Additional Column) */}
        <div style={{ gridRow: '2', gridColumn: '3', border: '1px solid #ccc', padding: '60px' }}>
            Column 3
        </div>
    </div>
);

export default LayoutTwo;