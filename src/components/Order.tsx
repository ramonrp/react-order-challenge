import * as React from 'react';
import data from '../data.json';
import { OrderDetail } from './OrderDetail';
import { OrderHeader } from './OrderHeader';
import { Order as OrderModel } from './order.model';
import { getTotalPrice, getPercentageCorrect } from '../utils';
const Order: React.FC = () => {
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
  return (
    <div style={{ height: '100%', border: 'solid', display: 'grid', placeItems: 'center' }}>
      <OrderHeader
        id={order.id}
        supplier={order.supplier}
        totalPrice={totalPrice}
        date={order.date}
        percentageCorrect={percentageCorrect}
        onSendData={handleSendOrder}
      />
      <OrderDetail
        detail={order.detail}
        onChangePrice={handlePriceChange}
        onValidate={handleValidate}
        onInvalidate={handleInvalidate}
      />
    </div>
  );
};

export { Order };
