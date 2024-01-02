import SelectLayoutContainer from './selectLayoutContainer';
import '../../styles.css';

const LayoutThree = () => {
    return <div>
        <SelectLayoutContainer id={3}><Grid /></SelectLayoutContainer>
    </div>
};



const Grid = () => (
    <div className="SelectContainer">
        {/* Header */}
        <div className='SelectLayoutHeaderSpan2' />

        <div className='SelectLayoutColumnOne' />

        <div className='SelectLayoutColumnTwo' />

        <div className='SelectLayoutFooter' />


    </div>
);

export default LayoutThree;