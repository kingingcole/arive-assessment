import React, {useState} from 'react'
import Input from '../components/Input'
import { useHistory } from "react-router-dom";
import Back from '../components/BackButton';

const CardForm = ({orderDetails, dispatch}) => {

    const [cardError, setCardError] = useState('');
    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        var valid = require("card-validator");
        var numberValidation = valid.number(orderDetails.cc);
        if (!numberValidation.isValid) {
            setCardError("Card number is incorrect");
        } else {
            console.log(numberValidation)
            history.push('/confirm')
        }
    }

    return (
        <form style={style.wrapper} onSubmit={onSubmit}>
            <div style={style.inputGroup}>
                <label htmlFor="cc">Card Number</label>
                <Input type='number' placeholder='Card Number' id='cc' value={orderDetails.cc} onChange={e => dispatch({type: 'SET_CC', payload: e.target.value})}/>
                <small style={style.cardError}>{cardError}</small>
            </div>
            <div style={style.inputGroup}>
                <label htmlFor="exp">Expiry Date</label>
                <Input type='text' placeholder='Expiry Date (MM/YY)' id='exp' value={orderDetails.expiryDate} onChange={e => dispatch({type: 'SET_EXPIRY_DATE', payload: e.target.value})}/>
            </div>
            <div style={style.inputGroup}>
                <label htmlFor="cvv">Security Code</label>
                <Input type='number' placeholder='CVV' id='cvv' value={orderDetails.cvv} onChange={e => {
                    if(e.target.value.length <= 3) {
                        dispatch({type: 'SET_CVV', payload: e.target.value})
                    }
                }} />
            </div>
            
            <Back />
            <Input type='submit'/>

        </form> 
    )
}

const style = {
    wrapper: {
        maxWidth: '1000px',
        margin: 'auto',
        background: '#ccc',
        marginTop: '40px',
        marginBottom: '40px',
        padding: '30px',
        overflowX: 'hidden'
    },
    inputGroup: {
        marginBottom: '20px',
    },
    cardError: {
        color: 'red'
    }
}

export default CardForm