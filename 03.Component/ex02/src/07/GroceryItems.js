import React from 'react';
import {Grocery_Items} from './assets/scss/GroceryItems.scss'

function GroceryItems({name, count}) {
    return (
            <li className={Grocery_Items}>
               <strong>{name}</strong>
               <span>{count}</span>
            </li>
    );
}

export default GroceryItems;