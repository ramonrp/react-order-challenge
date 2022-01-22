import { SyntheticEvent } from 'react';
import { useContextOrder } from '../context/context';
import { Detail } from './order.model';

interface Props {
  product: Detail;
  checked: boolean;
  onChangeCheckbox: () => void;
}

const DetailRow: React.FC<Props> = props => {
  const { product, checked, onChangeCheckbox } = props;
  const { onChangePrice } = useContextOrder();
  return (
    <div>
      <input checked={checked} onChange={onChangeCheckbox} type="checkbox"></input>
      <span> {product.status ? 'valido' : 'pendiente'}</span>
      <span> {product.description}</span>
      <input value={product.amount} onChange={e => onChangePrice(e, product.id)}></input>
    </div>
  );
};

export { DetailRow };
