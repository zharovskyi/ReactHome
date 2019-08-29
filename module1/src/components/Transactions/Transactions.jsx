import React from 'react';
import style from './Transactions.module.css';
import PropTypes from 'prop-types';


const Transactions = ({ items }) => (
    <table className={style.transactionHistory}>
        <thead className={style.thead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item =>

                <tr key={item.id} className={style.tr}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>

            )}
        </tbody>
    </table>
)

Transactions.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,

    })
}
export default Transactions;