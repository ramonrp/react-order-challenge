import * as React from 'react';
import { DetailRow } from './DetailRow';
import { useContextOrder } from '../context/context';

const OrderDetail: React.FC = () => {
  const { detail, onValidate, onInvalidate } = useContextOrder();
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
          checked={checkedSate[index]}
          onChangeCheckbox={() => handleInputChange(index)}
        />
      ))}
    </div>
  );
};

export { OrderDetail };
