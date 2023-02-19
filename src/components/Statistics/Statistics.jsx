import PropTypes from 'prop-types';
import {
  Container,
  StatisticsTitle,
  StatList,
  StatLabel,
  StatPercent,
} from './Statistics.styled';

import { randomHexColor } from 'components/utilits/colorChange';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} style={{ backgroundColor: randomHexColor() }}>
              <StatLabel>{label}</StatLabel>
              <StatPercent>{percentage} %</StatPercent>
            </li>
          );
        })}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
