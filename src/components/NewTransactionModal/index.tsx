import { FormEvent, useState } from "react";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

import { IoMdClose } from "react-icons/io";

import Modal from "react-modal";
import { useTransactions } from "../../context/useTransactions";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<"income" | "expense">("income");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount: Number(amount),
      tag: comment,
      type,
    });

    setTitle("");
    setAmount(0);
    setType("income");
    setComment("");
    onRequestClose();
  }

  function buttonDisabled() {
    if (
      title.trim() === "" ||
      !amount ||
      comment.trim() === "" ||
      type.trim() === ""
    ) {
      return true;
    }

    return false;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <IoMdClose size="28" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("income");
            }}
            isActive={type === "income"}
            activeColor="green"
          >
            <FaMoneyBillWaveAlt fontSize="24" color="#33cc95" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("expense");
            }}
            isActive={type === "expense"}
            activeColor="red"
          >
            <FaMoneyBillWaveAlt fontSize="24" color="#e52e4d" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Comentário"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />

        <button type="submit" disabled={buttonDisabled()}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
