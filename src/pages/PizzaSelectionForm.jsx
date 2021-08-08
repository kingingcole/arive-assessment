import React from 'react'
import { useHistory } from "react-router-dom";
import Input from '../components/Input'
import Back from '../components/BackButton';

const PSF = ({orderDetails, dispatch}) => {

    let history = useHistory();

    const pizzaOptions = [
        {size: 'Small', price: 15},
        {size: 'Medium', price: 20},
        {size: 'Large', price: 25},
    ]

    const toppingOptions = [
        {name: 'Olives', price: 3},
        {name: 'Pepperoni', price: 4},
        {name: 'Mushrooms', price: 2},
        {name: 'Pepper', price: 2},
    ]

    const totalPrice = orderDetails.pizzaPrice + orderDetails.toppingsPrice;

    const handleSubmit = () => {
        dispatch({type: 'SET_TOTAL_PRICE', payload: totalPrice});
        history.push('/pay');
    }
    
    return (
        <div style={style.wrapper}>
            <h3>Select a pizza</h3>
            {
                pizzaOptions.map((option, i) => {
                    const isSelected = orderDetails.pizzaSize === option.size;
                    const combinedStyle = Object.assign({}, style.option, isSelected && style.selectedOption);
                    const {size, price} = option;

                    const onClick = () => {
                        if(isSelected) {
                            return;
                        }
                        dispatch({type: 'SET_PIZZA_SIZE', payload: {price, size}});
                    }

                    return (
                        <div onClick={onClick} key={i} style={combinedStyle} className='pizzaOption'>
                            <p style={style.size}>{option.size}</p>
                            <p style={style.price}>${option.price}</p>
                        </div>
                    )
                })
            }
            <br />
            <h3>Select toppings</h3>
            <div style={style.toppings}>
                {toppingOptions.map((option, i) => {
                    const isSelected = orderDetails.toppings.includes(option.name);
                    const combinedStyle = Object.assign({width: '150px'}, style.option, isSelected && style.selectedOption)
                    
                    const onClick = () => {
                        if(!orderDetails.toppings.includes(option.name)) {
                            const toppings = [...orderDetails.toppings, option.name];
                            const toppingsPrice = orderDetails.toppingsPrice + option.price;
                            dispatch({type: 'SET_TOPPINGS', payload: {toppings, toppingsPrice}})
                        } else {
                            const index = orderDetails.toppings.indexOf(option.name);
                            const toppingsPrice = orderDetails.toppingsPrice - option.price;
                            const payload = {toppings: orderDetails.toppings, toppingsPrice}
                            if (index > -1) {
                                payload.toppings.splice(index, 1);
                            }
                            dispatch({type: 'SET_TOPPINGS', payload})
                        }
                    }

                    return (
                        <div className='pizzaOption' key={i} onClick={onClick} style={combinedStyle}>
                            <p style={style.size}>{option.name}</p>
                            <p style={style.price}>${option.price}</p>
                        </div>
                    )
                })}
            </div>

            <br />
            <h3>Total Price: </h3>
            <p style={style.totalPrice}>${totalPrice}</p>

            <br />
            <Back />
            <Input type='submit' value='submit' onClick={handleSubmit} disabled={!orderDetails.pizzaSize.length}/>
        </div>
    )
}


const style = {
    wrapper: {
        maxWidth: '1000px',
        margin: 'auto',
        marginTop: '40px',
        marginBottom: '40px',
        padding: '30px',
        overflowX: 'hidden'
    },
    option: {
        border: '1px solid #00baba',
        borderRadius: 10,
        padding: 20,
        marginBottom: 30,
        cursor: 'pointer'
    },
    selectedOption: {
        backgroundColor: '#00baba',
        color: 'white'
    },
    size: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 0
    },
    price: {
        fontWeight: 500
    },
    totalPrice: {
        fontWeight: 500,
        fontSize: 40,
        marginTop: 0
    },
    toppings: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}

export default PSF;