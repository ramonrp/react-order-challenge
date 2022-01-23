import * as React from 'react';
import { formatDate } from '../utils';
interface Props {
  id: number;
  supplier: string;
  date: string;
  totalPrice: string;
  percentageCorrect: string;
  onSendData: () => void;
}

const OrderHeader: React.FC<Props> = props => {
  const { id, supplier, date, totalPrice, onSendData, percentageCorrect } = props;

  return (
    <div>
      <HeaderInfo id={id} supplier={supplier} date={date} />
      <HeaderPrice
        totalPrice={totalPrice}
        onSendData={onSendData}
        percentageCorrect={percentageCorrect}
      />
    </div>
  );
};

interface InfoProps {
  id: number;
  supplier: string;
  date: string;
}
const HeaderInfo: React.ExoticComponent<InfoProps> = React.memo(({ id, supplier, date }) => {
  const formattedDate = formatDate(date);
  return (
    <div>
      <p>NºPedido:{id}</p>
      <p>Proveedor:{supplier}</p>
      <p>Fecha:{formattedDate}</p>
    </div>
  );
});
interface PriceProps {
  totalPrice: string;
  percentageCorrect: string;
  onSendData: () => void;
}
const HeaderPrice: React.FC<PriceProps> = ({ totalPrice, onSendData, percentageCorrect }) => {
  const isOrderCorrect = percentageCorrect === '100.00';
  return (
    <div>
      <p>Importe total:{totalPrice}</p>
      <p>Estado:{`${percentageCorrect}% correcto`}</p>
      <button disabled={!isOrderCorrect} onClick={onSendData}>
        Enviar
      </button>
    </div>
  );
};

export { OrderHeader };
