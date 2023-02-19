import PropTypes from 'prop-types';
import { FriendInfo, Icon, FriendStatus, FriendName } from './Friends.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendInfo>
      <FriendStatus isActive={isOnline}>{isOnline}</FriendStatus>
      <Icon src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendInfo>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
