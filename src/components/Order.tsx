import * as React from 'react';
import { OrderDetail } from './OrderDetail';
import { OrderHeader } from './OrderHeader';
import { OrderProvider } from '../context/context';
const Order: React.FC = () => {
  return (
    <OrderProvider>
      <div style={{ height: '100%', border: 'solid', display: 'grid', placeItems: 'center' }}>
        <OrderHeader />
        <OrderDetail />
      </div>
    </OrderProvider>
  );
};

export { Order };
