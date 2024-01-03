import React from 'react';
import styled from 'styled-components';

interface ColumnProps {
    flex?: number;
    children?: any
}

const ColumnContainer = styled.div<ColumnProps>`
    flex: ${props => (props.flex ? props.flex : 1)};
    padding: 20px;
    border: 1px solid #ddd;
  `;

const Column: React.FC<ColumnProps> = ({ flex, children }) => {
    return <ColumnContainer flex={flex}>{children}</ColumnContainer>;
};

export default Column;