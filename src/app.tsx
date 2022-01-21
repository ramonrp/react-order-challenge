import { useState } from 'react';
import styles from './mystyles.module.scss';
import logo from './public/logo_1.png';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  console.log(process.env.EXAMPLE_VARIABLE);
  return (
    <>
      <h1>Hello React and TS With Fast Refresh</h1>
      <button onClick={handleIncrease}>Counter {counter}</button>
      <div className={styles.redBackground}>RED</div>
      <div id="img-container">
        <img src={logo}></img>
      </div>
      ;
    </>
  );
};
