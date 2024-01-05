import ImageUploadButton from "../buttons/ImageUploadButton";
import SetSquareColor from "../SetSquareColor";
import SquareTextInput from "../SquareTextInput";
import { useSelector } from 'react-redux';

const ColumnThreeContent: React.FC = ({ }) => {
    const { highlightedSection } = useSelector((state: { grid: { highlightedSection: string } }) => state.grid);

    return <div><ImageUploadButton /> <SquareTextInput squareId={highlightedSection} /> <SetSquareColor squareId={highlightedSection} /> </div>
};

export default ColumnThreeContent;