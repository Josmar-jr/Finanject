import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  tag: string;
  type: string;
  date: string;
}

type TransactionInput = Omit<Transaction, "id" | "date">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  deleteTransaction: (id: number) => Promise<void>;
  isLoading: boolean;
  accumulatedValues: {
    income: number;
    expense: number;
    total: number;
  };
}

interface AllTransactionsReturn {
  transactions: Transaction[];
  inputs_amount: number;
  outputs_amount: number;
  total_amount: number;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isDelete, setIsDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasRegister, setHasRegister] = useState(false);
  const [accumulatedValues, setAccumulatedValues] = useState({
    income: 0,
    expense: 0,
    total: 0,
  });

  const createTransaction = async (transactionInput: TransactionInput) => {
    try {
      setIsLoading(true);
      const response = await api.post("/transacoes/", transactionInput);
    } catch (error) {
      throw new Error(`Deu um erro: ${error}`);
    } finally {
      setIsLoading(false);
      setHasRegister(true);
    }
  };

  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        setIsLoading(true);

        const { data } = await api.get<AllTransactionsReturn>("/transacoes/");

        setAccumulatedValues({
          income: data.inputs_amount,
          expense: data.outputs_amount,
          total: data.total_amount,
        });

        setTransactions(data.transactions);
      } catch (error) {
        throw new Error(`Deu um erro: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    getAllTransactions();
  }, [isDelete, hasRegister]);

  const deleteTransaction = async (id: number) => {
    try {
      await api.delete(`/transacoes/${id}/`);
      setIsDelete(true);
    } catch (err) {
      window.alert("error");
    } finally {
      setIsDelete(false);
    }
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        deleteTransaction,
        accumulatedValues,
        isLoading,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionsContext);
