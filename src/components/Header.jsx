import React from 'react'

const Header = () => {
    return (
        <header style={style.wrapper}>
            <p style={style.logo}>PizzaHut</p>
        </header>
    )
}

const style = {
    wrapper: {
        width: '100%',
        backgroundColor: '#00baba',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: 0
    },
    logo: {
        fontWeight: 'bold',
        margin: 0

    }
}

export default Header;