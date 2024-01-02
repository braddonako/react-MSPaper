import React, { ReactNode } from 'react';

// Define the type for the ContainerProps
type ContainerProps = {
    children: ReactNode;
};

// Container component with type annotation
const SelectLayoutContainer: React.FC<ContainerProps> = ({ children }) => (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        {children}
    </div>
);

export default SelectLayoutContainer; 