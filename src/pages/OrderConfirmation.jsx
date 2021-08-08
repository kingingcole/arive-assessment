import React from 'react'
import Back from '../components/BackButton'

const OCP = ({orderDetails}) => {
    return (
        <div style={{maxWidth: '1000px', margin: 'auto'}}>
            <p style={{textAlign: 'center'}}>Your order has been placed</p>
            {
                Object.keys(orderDetails).map((key, i) => (
                <div key={i} style={{textAlign: 'center'}}>
                    <p>{key}: {orderDetails[key]}</p>
                </div>
                ))
            }
            <Back />
        </div>
    )
}

export default OCP