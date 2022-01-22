import { SyntheticEvent } from 'react';
import { Detail } from './order.model';

interface Props {
  product: Detail;
  onChangePrice: (e: SyntheticEvent, id: number) => void;
  checked: boolean;
  onChangeCheckbox: () => void;
}

const DetailRow: React.FC<Props> = props => {
  const { product, onChangePrice, checked, onChangeCheckbox } = props;
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
