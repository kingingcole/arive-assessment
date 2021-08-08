import React from 'react'
import { useHistory } from "react-router-dom";
import Input from '../components/Input'

const ContactForm = ({orderDetails, dispatch}) => {

    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        history.push('/select-pizza');
    }

    return (
        <form style={style.wrapper} onSubmit={onSubmit}>
            <h3>Enter Contact Information</h3>

            <div style={style.inputGroup}>
                <label htmlFor="firstName">First Name</label>
                <Input type='text' placeholder='First Name' id='firstName' value={orderDetails.firstName} onChange={e => dispatch({type: 'SET_FIRST_NAME', payload: e.target.value})}/>
            </div>
            <div style={style.inputGroup}>
                <label htmlFor="lastName">Last Name</label>
                <Input type='text' placeholder='Last Name' id='lastName' value={orderDetails.lastName} onChange={e => dispatch({type: 'SET_LAST_NAME', payload: e.target.value})}/>
            </div>
            <div style={style.inputGroup}>
                <label htmlFor="streetName">Street Name</label>
                <Input type='text' placeholder='Street Name' id='streetName' value={orderDetails.streetName} onChange={e => dispatch({type: 'SET_STREET_NAME', payload: e.target.value})}/>
            </div>
            <div style={style.inputGroup}>
                <label htmlFor="houseNumber">House Number</label>
                <Input type='number' placeholder='House Number' id='houseNumber' value={orderDetails.houseNumber} onChange={e => dispatch({type: 'SET_HOUSE_NUMBER', payload: e.target.value})}/>
            </div>
            <div style={style.inputGroup}>
                <label htmlFor="postalCode">Postal Code</label>
                <Input type='number' placeholder='Postal Code' id='postalCode' value={orderDetails.postalCode} onChange={e => dispatch({type: 'SET_POSTAL_CODE', payload: e.target.value})}/>
            </div>
            <div style={style.inputGroup}>
                <label htmlFor="city">City</label>
                <Input type='text' placeholder='City' id='city' value={orderDetails.city} onChange={e => dispatch({type: 'SET_CITY', payload: e.target.value})}/>
            </div>
            <div style={style.inputGroup}>
                <label htmlFor="phone">Phone Number</label>
                <Input type='tel' placeholder='Phone Number' id='phone' value={orderDetails.phone} onChange={e => dispatch({type: 'SET_PHONE', payload: e.target.value})}/>
            </div>

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
    }
}

export default ContactForm