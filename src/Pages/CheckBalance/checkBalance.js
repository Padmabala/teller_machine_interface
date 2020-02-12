import React,{Component} from 'react';

import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import routes from '../../routes/routes';
import fetchData from "../../services/fetchDetails"
import { GET_BALANCE_API } from '../../constants/serverUrls';
class checkBalance extends Component{
    state={
        amount:""
    }

    componentDidMount(){
        fetchData(GET_BALANCE_API,"GET")
            .then((resp)=>{
                this.setState({
                    amount:resp
                })
            })
            .catch(error=>{
                console.log(error)
                this.setState({
                    amount:"Something went wrong. Try again later"
                })
            })
        

    }

    render(){
        const {amount}=this.state;
        const divStyle={
            position:'fixed',top:'20%',left: '30%',width:'30em',height:'18em','text-align':'center',padding:'70px',border: '1px solid'
        }
        return(
            <div className="form-group" style={divStyle}>    
                Your Balance is {amount}

                <br/><br/><br/>
                <NavLink to={routes.home}>Go to Home Page</NavLink>

            </div>
            
        )
    }
}
// checkBalance.propTypes={
//     amount:PropTypes.numb
// }
export default checkBalance;
