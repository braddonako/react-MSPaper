import CustomButton from "../buttons/button";
import Grid from "../grid";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function PreviewLayoutPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/editLayoutPage', { state: { layout: location.state.layout } });
    };

    return (
        <div>
            <Grid isEditMode={true} layout={location.state.layout} />
            <CustomButton text="Back to editor" onClick={() => { handleClick() }} />
        </div>

    );
}

export default PreviewLayoutPage;