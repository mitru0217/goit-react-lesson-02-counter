import css from './Value.module.css';

const Value = ({ value }) => <span className={css.counterValue}>{value}</span>;

export default Value;
