import { formatDate, getTotalPrice, getPercentageCorrect } from '../utils';
import { useContextOrder } from '../context/context';
const OrderHeader: React.FC = () => {
  const { state } = useContextOrder();
  const { id, detail, date, supplier } = state;
  const totalPrice = getTotalPrice(detail);
  const percentageCorrect = getPercentageCorrect(detail);
  const handleSendOrder = () => {
    if (percentageCorrect !== '100.00') return;
    alert('order sent');
  };
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
        <button disabled={!isOrderCorrect} onClick={handleSendOrder}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export { OrderHeader };
