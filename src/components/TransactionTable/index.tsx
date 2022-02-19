import { Container } from "./styles";

import { FaTrash } from "react-icons/fa";
import { useTransactions } from "../../context/useTransactions";

export function TransactionTable() {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="tbody">
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.date}</td>
              <td>
                <button onClick={() => deleteTransaction(transaction.id)}>
                  <FaTrash color="#8d8e9b" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
