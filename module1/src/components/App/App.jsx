import React from 'react';
import Profile from '../Profile/Profile';
import profile from '../Profile/profile.json';
import './App.css';
import Statistic from '../Statistic/Statistic';
import statistic from '../Statistic/statistic.json';
import PricingPlan from '../PricingPlan/PricingPlan';
import pricingPlan from '../PricingPlan/pricingPlan.json'
import Transactions from '../Transactions/Transactions';
import transactions from '../Transactions/transactions.json'


const App = () => {
    return (
        <>
            <Profile name={profile.name} tag={profile.tag} location={profile.location} avatar={profile.avatar} stats={profile.stats} />
            <Statistic title="Upload stats" items={statistic} />
            <PricingPlan items={pricingPlan} />
            <Transactions items={transactions} />
        </>
    )
}
export default App