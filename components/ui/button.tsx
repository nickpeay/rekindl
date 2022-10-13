import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  width: 200px;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  font-size: 1em;
  border-radius: 12px;
  background-color: #c17564;
  color: white;
  border: none;
  letter-spacing: 0.05em;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  z-index: 1;

  &:hover {
    background-color: white;
    color: #c17564;
  }
`;

export default Button;
