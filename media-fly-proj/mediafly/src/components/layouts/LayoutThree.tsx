import SelectLayoutContainer from './selectLayoutContainer';
import '../../styles.css';

const LayoutThree = () => {
    return <div>
        <SelectLayoutContainer id={3}><Grid /></SelectLayoutContainer>
    </div>
};



const Grid = () => (
    <div className="container">
        <header className="header" />
        <div className="columns-container">
            <div className="square-column" />
            <div className="square-column" />

        </div>
        <footer className="footer" />
    </div>
);

export default LayoutThree;