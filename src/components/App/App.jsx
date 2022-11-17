import React from 'react';
import Counter from '../Counter/Counter';
import css from './App.module.css';
export const App = () => {
  return (
    <div className={css.container}>
      <h1>Состояние компонента</h1>
      <Counter />
    </div>
  );
};
