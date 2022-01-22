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
  const formattedDate = formatDate(date);
  const isOrderCorrect = percentageCorrect === '100.00';
  return (
    <div>
      <div>
        <p>NºPedido:{id}</p>
        <p>Proveedor:{supplier}</p>
        <p>Fecha:{formattedDate}</p>
      </div>
      <div>
        <p>Importe total:{totalPrice}</p>
        <p>Estado:{`${percentageCorrect}% correcto`}</p>
        <button disabled={!isOrderCorrect} onClick={onSendData}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export { OrderHeader };
