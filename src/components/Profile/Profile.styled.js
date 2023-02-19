import styled from 'styled-components';

export const Container = styled.section`
  width: 400px;
  background-color: white;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  padding-top: 15px;
  box-shadow: 0 0 10px #61c3f4de;
  border-radius: 5px;
  margin-bottom: 25px;
`;

export const Avatar = styled.div`
  width: inherit;
  display: inherit;
  flex-direction: inherit;
  align-items: center;
  border-bottom: 2px solid grey;
`;

export const Image = styled.img`
  width: 350px;
  background-color: lightslategray;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const Name = styled.p`
  color: #141212;
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 10px;
`;
export const Tag = styled.p`
  color: #646060;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const ProfileStats = styled.ul`
  width: inherit;
  background-color: #7ea4badc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;

  li {
    display: inherit;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const StatsLabel = styled.span`
  color: #141212;
  font-size: 20px;
  font-weight: 800;
`;

export const StatsQuant = styled.span`
  color: #646060;
  font-size: 20px;
  font-weight: 600;
`;
