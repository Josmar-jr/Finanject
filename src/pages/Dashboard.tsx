import { Summary } from "../components/Summary";
import { TransactionTable } from "../components/TransactionTable";

import { Container } from "../styles/pages/Dashboard";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
