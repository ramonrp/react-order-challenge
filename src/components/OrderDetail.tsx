import * as React from 'react';
import { SyntheticEvent } from 'react';
import { Detail } from './order.model';
import { DetailRow } from './DetailRow';
interface Props {
  detail: Detail[];
  onChangePrice: (e: SyntheticEvent, id: number) => void;
  onValidate: (checkbox: boolean[]) => void;
  onInvalidate: (checkbox: boolean[]) => void;
}

const OrderDetail: React.FC<Props> = props => {
  const { detail, onChangePrice, onValidate, onInvalidate } = props;
  const initialCheckedState = new Array(detail.length).fill(false);
  const [checkedSate, setCheckedState] = React.useState(initialCheckedState);
  const handleInputChange = (position: number) => {
    const updatedCheckedState = checkedSate.map((item, index) => {
      if (index === position) return !item;
      return item;
    });
    setCheckedState(updatedCheckedState);
  };

  const handleValidate = () => {
    onValidate(checkedSate);
    setCheckedState(initialCheckedState);
  };
  const handleInvalidate = () => {
    onInvalidate(checkedSate);
    setCheckedState(initialCheckedState);
  };
  return (
    <div>
      <button onClick={handleValidate}>Validar</button>
      <button onClick={handleInvalidate}>Invalidar</button>
      {detail.map((product, index) => (
        <DetailRow
          key={product.id}
          product={product}
          onChangePrice={onChangePrice}
          checked={checkedSate[index]}
          onChangeCheckbox={() => handleInputChange(index)}
        />
      ))}
    </div>
  );
};

export { OrderDetail };
