import SelectLayoutContainer from './selectLayoutContainer';
import '../../styles.css';


const LayoutOne = () => {
    return <div>
        <SelectLayoutContainer id={1}><Grid /></SelectLayoutContainer>
    </div>
};



const Grid = () => (


    <div className="SelectContainer">
        {/* Header */}
        <div className='SelectLayoutHeaderSpan2' />

        <div className='SelectLayoutColumnOne' />

        <div className='SelectLayoutColumnTwo' />

    </div>
);

export default LayoutOne;