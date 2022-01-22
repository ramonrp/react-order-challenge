import * as React from 'react';
import { Order as OrderModel, Detail } from '../components/order.model';
import { getPercentageCorrect, getTotalPrice } from '../utils';
import data from '../data.json';
interface ContextProps {
  id: number;
  supplier: string;
  date: string;
  totalPrice: string;
  percentageCorrect: string;
  onSendData: () => void;
  detail: Detail[];
  onChangePrice: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  onValidate: (checkbox: boolean[]) => void;
  onInvalidate: (checkbox: boolean[]) => void;
}
const ContextOrder = React.createContext<Partial<ContextProps>>({});

const OrderProvider = ({ children }) => {
  const [order, setOrder] = React.useState<OrderModel>(data);
  const totalPrice = getTotalPrice(order.detail);
  const percentageCorrect = getPercentageCorrect(order.detail);
  const handleSendOrder = () => {
    if (percentageCorrect !== '100.00') return;
    alert('order sent');
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const detailCopy = [...order.detail];
    const newPrice = e.target.value;
    const detailUpdated = detailCopy.map(product => {
      if (product.id === id) {
        return { ...product, amount: Number(newPrice) };
      } else {
        return product;
      }
    });
    setOrder({ ...order, detail: detailUpdated });
  };
  const handleValidate = (checkboxs: boolean[]) => {
    const detailCopy = [...order.detail];
    const detailUpdated = detailCopy.map((product, index) => {
      if (checkboxs[index]) return { ...product, status: true };
      else return product;
    });
    setOrder({ ...order, detail: detailUpdated });
  };
  const handleInvalidate = (checkboxs: boolean[]) => {
    const detailCopy = [...order.detail];
    const detailUpdated = detailCopy.map((product, index) => {
      if (checkboxs[index]) return { ...product, status: false };
      else return product;
    });
    setOrder({ ...order, detail: detailUpdated });
  };
  const value = {
    id: order.id,
    supplier: order.supplier,
    totalPrice,
    date: order.date,
    percentageCorrect,
    onSendData: handleSendOrder,
    detail: order.detail,
    onChangePrice: handlePriceChange,
    onValidate: handleValidate,
    onInvalidate: handleInvalidate,
  };
  return <ContextOrder.Provider value={value}>{children}</ContextOrder.Provider>;
};

const useContextOrder = () => {
  const context = React.useContext(ContextOrder);
  if (!context.id) throw new Error('useContextOrder must be used within a OrderProvider component');
  return context;
};

export { useContextOrder, OrderProvider };
