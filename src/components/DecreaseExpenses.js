import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Remaining = () => {
    const {decrease, remaining} = useContext(AppContext);
    const decreaseAllocation = expenses.reduce((total, item)=> {
        return (total = total - item.cost);
    }, 0);
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget + decreaseAllocation}</span>
        </div>
        
    );
};

export default Remaining;
