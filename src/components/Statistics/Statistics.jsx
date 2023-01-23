import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, statistic }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {statistic.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id}>
              <span className={css.label} label={label}>
                {label}
              </span>
              <span className={css.percentage} percentage={percentage}>
                {percentage}%
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  statistic: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
