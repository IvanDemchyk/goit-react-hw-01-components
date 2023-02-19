import styled from 'styled-components';

export const Container = styled.section`
  box-shadow: 0 0 10px #61c3f4de;
  padding-top: 10px;
  margin-bottom: 25px;
  width: 400px;
`;

export const StatisticsTitle = styled.h2`
  color: #141212;
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 10px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */

  li {
    display: flex;
    flex-basis: calc(100% / 5);
    flex-direction: column;
    padding: 10px;
    text-align: center;
  }
`;

export const StatLabel = styled.span`
  color: #141212;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const StatPercent = styled.span`
  color: #141212;
  font-size: 20px;
  font-weight: 700;
`;
