import React from 'react';
import classes from './HeaderCartButton.module.css'

const CartButton=()=>{
    return (
        <button className={classes.button}>Your Cart
        <div className={classes.badge}>0</div>
        </button>
    )
}

export default CartButton;