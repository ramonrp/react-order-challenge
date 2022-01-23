import * as React from 'react';
import { Order as OrderModel, Detail } from '../components/order.model';
import data from '../data.json';
type Action = {
  type: 'validate' | 'invalidate' | 'changePrice';
  payload: { id?: number; value?: string; checkboxs?: boolean[] };
};

type Dispatch = (action: Action) => void;
const initialState: OrderModel = data;

const orderReducer = (state: OrderModel, action: Action) => {
  const { id, value, checkboxs } = action.payload;
  switch (action.type) {
    case 'changePrice': {
      const detailCopy = [...state.detail];
      const newPrice = value;
      const detailUpdated = detailCopy.map(product => {
        if (product.id === id) {
          return { ...product, amount: Number(newPrice) };
        } else {
          return product;
        }
      });
      return { ...state, detail: detailUpdated };
    }
    case 'validate': {
      const detailCopy = [...state.detail];
      const detailUpdated = detailCopy.map((product, index) => {
        if (checkboxs[index]) return { ...product, status: true };
        else return product;
      });
      return { ...state, detail: detailUpdated };
    }
    case 'invalidate': {
      const detailCopy = [...state.detail];
      const detailUpdated = detailCopy.map((product, index) => {
        if (checkboxs[index]) return { ...product, status: false };
        else return product;
      });
      return { ...state, detail: detailUpdated };
    }
  }
};

const ContextOrder =
  React.createContext<{ state: OrderModel; dispatch: Dispatch | undefined }>(undefined);
const OrderProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(orderReducer, initialState);

  const value = { state, dispatch };
  return <ContextOrder.Provider value={value}>{children}</ContextOrder.Provider>;
};

const useContextOrder = () => {
  const context = React.useContext(ContextOrder);
  if (!context) throw new Error('useContextOrder must be used within a OrderProvider component');
  return context;
};

const changePrice = (dispatch: Dispatch, newPrice: string, id: number) => {
  dispatch({ type: 'changePrice', payload: { value: newPrice, id } });
};

const validate = (dispatch: Dispatch, checkboxs: boolean[]) => {
  dispatch({ type: 'validate', payload: { checkboxs } });
};

const invalidate = (dispatch: Dispatch, checkboxs: boolean[]) => {
  dispatch({ type: 'invalidate', payload: { checkboxs } });
};

export { useContextOrder, OrderProvider, changePrice, validate, invalidate };
