import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

export const FriendInfo = styled.section`
  width: 400px;
  box-shadow: 0 0 10px #61c3f4de;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: st; */
  height: auto;
  padding: 15px;
`;

export const Icon = styled.img`
  width: 80px;
  margin-right: 15px;
`;

export const FriendStatus = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 40px;
  background-color: ${props => {
    if (!props.isActive) {
      return 'red';
    } else {
      return 'green';
    }
  }};
`;

export const FriendName = styled.p`
  color: #646060;
  font-size: 20px;
  font-weight: 600;
`;
