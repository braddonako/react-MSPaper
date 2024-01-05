import ImageUploadButton from "../../buttons/ImageUploadButton";
import CustomButton from "../../buttons/button";
import SetSquareColor from "../SetSquareColor";
import SquareTextInput from "../SquareTextInput";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface ColumnThreeContentProps {
    layout: { rows: number; columns: number[] };
}



const ColumnThreeContent: React.FC<ColumnThreeContentProps> = (props) => {
    const { layout } = props;
    const { rows, columns } = layout;

    const { highlightedSection } = useSelector((state: { grid: { highlightedSection: string } }) => state.grid);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/previewLayout', { state: { layout } });
    };

    return (
        <div className="vertical-buttons">
            <ImageUploadButton />
            <SquareTextInput squareId={highlightedSection} />
            <SetSquareColor squareId={highlightedSection} />
            <CustomButton text="Preview Layout" onClick={handleClick} />
        </div>
    );
};

export default ColumnThreeContent;