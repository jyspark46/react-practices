import React from 'react';
import GroceryItems from './GroceryItems';
import {Grocery_List} from './assets/scss/GroceryList.scss';

function GroceryList({groceries}) {

  return (
    <ol className={"Grocery_List"}>
      {
        groceries.map(e => <GroceryItems
          key={e.no}
          name={e.name}
          count={e.count} />)
      }
    </ol>
  );
}

export default GroceryList;