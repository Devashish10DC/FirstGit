import React from 'react';
import classes from './MealsItemForm.module.css'
import Input from '../../UI/Input';

const MealsItemForm=()=>{
    return (
        <div className={classes.form}>
            <Input label="Amount" input={{id:'Amount',type:'number', min:'1', max:'5', defaultvalue:'1'}}/>
            <button>+ Add</button>
        </div>
    )
};

export default MealsItemForm;