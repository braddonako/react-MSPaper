import SelectLayoutContainer from './selectLayoutContainer';
import '../../styles.css';


const LayoutTwo = () => {

    return <div>
        <SelectLayoutContainer id={2}><Grid /></SelectLayoutContainer>
    </div>
};


const Grid = () => (
    <div className="SelectContainer">
        {/* Header */}
        <div className='SelectLayoutHeaderSpan3' />

        <div className='SelectLayoutColumnOne' />

        <div className='SelectLayoutColumnTwo' />

        <div className='SelectLayoutColumnThree' />


    </div >
);

export default LayoutTwo;