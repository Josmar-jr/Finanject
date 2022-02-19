import {
  IoIosArrowRoundDown,
  IoIosArrowRoundUp,
  IoIosWallet,
} from "react-icons/io";
import { useTransactions } from "../../context/useTransactions";
import { Container } from "./styles";
import { TransactionCart } from "./TransactionCart";

export function Summary() {
  const { accumulatedValues } = useTransactions();

  return (
    <Container>
      <TransactionCart
        title="Entradas"
        amount={accumulatedValues.income}
        icon={<IoIosArrowRoundUp fontSize="42" color="#33cc95" />}
      />
      <TransactionCart
        title="Saídas"
        amount={accumulatedValues.expense}
        icon={<IoIosArrowRoundDown fontSize="42" color="#e52e4d" />}
      />
      <TransactionCart
        title="Total"
        amount={accumulatedValues.total}
        icon={<IoIosWallet fontSize="42" />}
      />
    </Container>
  );
}
