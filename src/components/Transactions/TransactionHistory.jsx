import PropTypes from 'prop-types';
import { Table, TableHead, TableRow } from './Transactions.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <TableHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHead>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
