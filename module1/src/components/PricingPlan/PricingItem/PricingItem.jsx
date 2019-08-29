import React from 'react';
import PropTypes from 'prop-types';
import style from './PricingItem.module.css'

const PricingItem = ({ item }) => {
    let color;
    if (item.label === 'Bronze') {
        color = '#cc6633';
    } else if (item.label === 'Silver') {
        color = 'silver';
    } else {
        color = 'gold';
    }

    return (
        <div className={style.pricingItem}>
            <img className={style.icon} src={item.icon} alt="Pupkin" />
            <h2 className={style.label} style={{ color }}>{item.label}</h2>
            <p className={style.capacity}>{item.capacity} Storage</p>
            <p className={style.description}>
                {item.description}
            </p>
            <p className={style.price}>{item.price}/MO</p>
            <button className={style.button} style={{ backgroundColor: color }}>Get Started</button>
        </div>
    );
}

PricingItem.propTypes = {
    item: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        capacity: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    })
}
export default PricingItem;