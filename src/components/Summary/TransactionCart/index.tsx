import { Container } from "./styles";

interface TransactionCartProps {
  title: string;
  icon: JSX.Element;
  amount: number;
}

export function TransactionCart({ title, icon, amount }: TransactionCartProps) {
  return (
    <Container highlight={title === "Total"}>
      <header>
        <p>{title}</p>
        {icon}
      </header>
      <strong>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(amount)}
      </strong>
    </Container>
  );
}
