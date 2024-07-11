import React from 'react';
import GroceryItems from './GroceryItems';

function GroceryList(props) {
    return (
      <ol className={"grocery-list"}>
        <GroceryItems name={'Milk'} count={10} />
        <GroceryItems name={'Egg'} count={30} />
        <GroceryItems name={'Bread'} count={20} />
      </ol>
    );
}

export default GroceryList;