import React from 'react'

const Input = ({value, type, placeholder, onChange, id, disabled, isBackButton, onClick}) => {
    return (
        <input id={id} style={type === 'submit' ? createButtonStyle(disabled, isBackButton) : style} type={type} placeholder={placeholder} value={value} onChange={onChange} onClick={onClick && onClick} required disabled={disabled}/>
    )
}

const createButtonStyle = (disabled, isBackButton) => {
    return {
        background: disabled ? '#ccc' : (isBackButton ? 'grey' : '#00baba'),
        width: '100%',
        border: 0,
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        cursor: disabled ? 'not-allowed': 'pointer',
        marginTop: 7
    }
}

const style = {
    width: '100%',
    padding: 10,
    border: 0,
    borderRadius: 3,
    display: 'block',
    marginTop: 7,
    boxSizing: 'border-box'
}

export default Input