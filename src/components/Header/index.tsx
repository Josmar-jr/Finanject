import tigerHappyImg from "../../assets/tiger-happy.png";
import tigerMediumImg from "../../assets/tiger-medium.png";
import tigerSadImg from "../../assets/tiger-sad.png";
import { useTransactions } from "../../context/useTransactions";

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  const {
    accumulatedValues: { total },
  } = useTransactions();

  const verifyTotal = (total: number) => {
    if (total < 0) return tigerSadImg;
    else if (total === 0) return tigerMediumImg;
    return tigerHappyImg;
  };

  return (
    <Container>
      <Content>
        <img src={verifyTotal(total)} alt="Saldo positivo" />
        <h1>
          Finanject<span>.</span>
        </h1>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Adicionar transação
        </button>
      </Content>
    </Container>
  );
}
