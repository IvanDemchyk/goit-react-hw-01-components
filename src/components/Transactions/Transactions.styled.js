import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  border-spacing: 0;
  box-shadow: 0 0 10px #61c3f4de;
`;

export const TableHead = styled.tr`
  background-color: #425ece98;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #c6cccce6;
  margin-bottom: 10px;
  padding: 10px;
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #c6cccce6;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #69cfc198;

  &:nth-child(even) {
    background-color: #5493ced0;
  }
`;
