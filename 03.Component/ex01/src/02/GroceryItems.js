import React from 'react';

function GroceryItems({name, count}) {
    return (
            <li>
               <strong>{name}</strong>
               <span>{count}</span>
            </li>
    );
}

export default GroceryItems;