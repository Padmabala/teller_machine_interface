import React from 'react';
import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom';
import routes from "../routes/routes";


const TransactionForm=({id="",customInputLabel="",value="",message="",onFieldChange=null,onSubmit=null})=>{
    const changeHandler=(event)=>{
        onFieldChange(event,id)
    }
    const onClickSubmit=(event)=>{
        onSubmit(event);
    }
    const divStyle={
        position:'fixed',top:'20%',left: '30%',width:'30em',height:'18em','text-align':'center',padding:'70px',border: '1px solid'
    }
    return(
        <div className="form-group" style={divStyle}>
            <label htmlFor={id}>{customInputLabel}</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input  type="text" id={id} value={value} required={true} onChange={changeHandler} />
            <br/><br/>
            <button onClick={onClickSubmit} align='center'>Submit</button>
            <br/><br/>
            <div align="center">{message}</div>
            <NavLink to={{pathname:routes.home,
                                state:{validUser:true}}}>Go to Home Page</NavLink>
        </div>
    )
}
TransactionForm.propTypes={
    id:PropTypes.string.isRequired,
    customInputLabel:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onFieldChange:PropTypes.func.isRequired,
    message:PropTypes.string.isRequired,
    validateUser:PropTypes.func.isRequired
}
export default TransactionForm;