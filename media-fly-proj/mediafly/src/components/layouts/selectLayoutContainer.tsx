import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContainer } from '../../state/selectLayout/selectLayoutSlice';
import { RootState } from '../../state/store'; // 

// Define the type for the ContainerProps
type ContainerProps = {
    children: ReactNode;
    id: number;
};

// Container component with type annotation
const SelectLayoutContainer: React.FC<ContainerProps> = ({ children, id }) => {
    const dispatch = useDispatch();
    const selectedContainerId = useSelector((state: RootState) => state.containers.selectedContainerId);
    const handleClick = () => {
        dispatch(selectContainer(id));
    };

    return (
        <div
            onClick={handleClick}
            style={{ border: id === selectedContainerId ? '2px solid #66ff00' : '2px solid gray' }}
        >
            {children}
        </div>
    );
}

export default SelectLayoutContainer;


