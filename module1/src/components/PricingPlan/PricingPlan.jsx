import React from 'react';
import PricingItem from './PricingItem/PricingItem'
import style from './PricingPlan.module.css'
import PropTypes from 'prop-types';

const PricingPlan = ({ items }) => (
    <ul className={style.pricingPlan}>
        {items.map(item =>
            <li key={item.price} className={style.item}>
                <PricingItem item={item} />
            </li>
        )}
    </ul>
)
PricingPlan.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        capacity: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    })).isRequired,
};

export default PricingPlan