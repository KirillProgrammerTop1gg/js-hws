const TransactionHistory = ({ transactions }) => <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(transaction => <tr key={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>)}
  </tbody>
</table>

export default TransactionHistory;