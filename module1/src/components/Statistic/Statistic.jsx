import React from 'react';
import style from './Statistic.module.css'
import PropTypes from 'prop-types';


const Statistic = ({ title, items }) => (
    <section className={style.statsSection}>
        <h2 className={style.title}>{title}</h2>

        <ul className={style.statList}>
            {items.map(item => (

                <li className={style.item} key={item.id}>
                    <span className={style.label}>{item.label}</span>
                    <span className={style.percentage}>{item.percentage}</span>
                </li>
            ))}
        </ul>
    </section>
)

Statistic.defaultProps = {
    title: "Pupkin"
}

Statistic.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,

};

export default Statistic