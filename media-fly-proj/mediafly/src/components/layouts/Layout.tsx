import SelectLayoutContainer from './selectLayoutContainer';
import '../../styles.css';
import Grid from '../grid';

interface LayoutProps {
    layout: {
        rows: number;
        columns: number[];
    },
    id: number;
    onClick: () => void;
}
const Layout: React.FC<LayoutProps> = ({ layout, id, onClick }) => {

    return (
        <div onClick={onClick}>
            <SelectLayoutContainer id={id}>
                <Grid layout={layout} isEditMode={false} />
            </SelectLayoutContainer>
        </div>
    );
};

export default Layout;