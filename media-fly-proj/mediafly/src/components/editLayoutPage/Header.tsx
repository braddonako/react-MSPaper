import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearHighlightedColor, clearAllSquareProperties } from '../../state/grid/gridSlice';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  flex-grow: 1; /* Allow the title to grow and take available space */
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;


const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseButtonClick = () => {
    navigate('/');
    dispatch(clearHighlightedColor());
    dispatch(clearAllSquareProperties());
  };

  return (
    <HeaderContainer>
      <Title>Untitled Page</Title>
      <CloseButton onClick={handleCloseButtonClick}>X</CloseButton>
    </HeaderContainer>
  );
};

export default Header;