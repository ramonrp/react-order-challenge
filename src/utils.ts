import { Detail } from './components/order.model';

const getPercentageCorrect = (products: Detail[]) => {
  const numberProductCorrect = products.reduce((acc, product) => {
    return product.status ? acc + 1 : acc;
  }, 0);
  const percentage = (numberProductCorrect / products.length) * 100;
  return percentage.toFixed(2);
};

const getTotalPrice = (products: Detail[]) => {
  return products
    .reduce((acc, product) => {
      return acc + product.amount;
    }, 0)
    .toFixed(2);
};

const formatDate = (date: string) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  const dateVM = `${day} / ${month} / ${year}`;
  return dateVM;
};

export { getPercentageCorrect, getTotalPrice, formatDate };
