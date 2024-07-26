import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => <section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.list}>
    {stats.map(stat => <li className={css.item} key={stat.id} style={{"backgroundColor": `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`}}>
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}> {stat.percentage}%</span>
    </li>)}
  </ul>
</section>

export default Statistics;