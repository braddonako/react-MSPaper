import SelectLayoutContainer from './selectLayoutContainer';
import '../../styles.css';

const LayoutThree = () => {
    return <div>
        <SelectLayoutContainer><Grid /></SelectLayoutContainer>
    </div>
};



const Grid = () => (
    <div className="SelectContainer">
        {/* Header */}
        <div style={{ gridRow: '1', gridColumn: '1 / span 2', border: '1px solid #ccc', textAlign: 'center', fontSize: '24px' }}>
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

        {/* Footer */}
        <div style={{ gridRow: '3', gridColumn: '1 / span 2', border: '1px solid #ccc', textAlign: 'center', fontSize: '18px', marginTop: '20px' }}>
            Footer
        </div>
    </div>
);

export default LayoutThree;