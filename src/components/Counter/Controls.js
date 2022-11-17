import React from 'react';
import css from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={css.counterControls}>
    <button type="button" className={css.btnControl} onClick={onIncrement}>
      Increase by 1
    </button>
    <button type="button" className={css.btnControl} onClick={onDecrement}>
      Decrease by 1
    </button>
  </div>
);

export default Controls;
