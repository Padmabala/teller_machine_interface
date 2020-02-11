import React from 'react';
import PropTypes from 'prop-types';
const checkBalance=({amount=0})=>{
    return(
        <div>
            Your Balance is {amount}
        </div>
    )
}
// checkBalance.propTypes={
//     amount:PropTypes.numb
// }
export default checkBalance;
