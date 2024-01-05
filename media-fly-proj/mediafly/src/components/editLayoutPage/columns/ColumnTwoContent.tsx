import Grid from '../../grid';

interface ColumnTwoContentProps {
    layout: { rows: number; columns: number[] };
}

const ColumnTwoContent: React.FC<ColumnTwoContentProps> = ({ layout }) => {

    return <Grid layout={layout} isEditMode={true} />
};

export default ColumnTwoContent;