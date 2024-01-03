import SelectLayoutContainer from './selectLayoutContainer';
import '../../styles.css';


const LayoutOne = () => {
    return <div>
        <SelectLayoutContainer id={1}><Grid /></SelectLayoutContainer>
    </div>
};



const Grid = () => (
    <div className="container">
        <header className="header" />
        <div className="columns-container">
            <div className="square-column" />
            <div className="square-column" />
        </div>
    </div>


);

export default LayoutOne;