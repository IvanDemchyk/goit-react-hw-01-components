import PropTypes from 'prop-types';
import {
  Container,
  Avatar,
  Image,
  Name,
  Tag,
  ProfileStats,
  StatsLabel,
  StatsQuant,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Avatar>
        <Image src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Tag>{location}</Tag>
      </Avatar>

      <ProfileStats>
        <li>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuant>{stats.followers}</StatsQuant>
        </li>
        <li>
          <StatsLabel>Views</StatsLabel>
          <StatsQuant>{stats.views}</StatsQuant>
        </li>
        <li>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuant>{stats.likes}</StatsQuant>
        </li>
      </ProfileStats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
