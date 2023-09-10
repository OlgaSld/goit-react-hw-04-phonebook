import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 600px;
    padding: 12px;
    border-radius: 4px;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 20px;
  padding: 10px;
  margin-bottom: 5px;
  font-size: 24px;
  color: #000;
`;

export const ButtonDel = styled.button`
  display: block;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 4px;

  &:hover, &:focus {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
