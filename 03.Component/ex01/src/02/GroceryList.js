import React from 'react';
import GroceryItems from './GroceryItems';

function GroceryList({groceries}) {
  // const groceryItems = [];
  // groceries.forEach(grocery => {
  //     groceryItems.push(<GroceryItems name={grocery.name} count={grocery.count} />);
  // });

  return (
    <ol className={"grocery-list"}>
      {
        groceries.map(e => <GroceryItems
          key={e.no}
          name={e.name}
          count={e.count} />)
      }
      {/* <GroceryItems name={'Milk'} count={10} />
      <GroceryItems name={'Egg'} count={30} />
      <GroceryItems name={'Bread'} count={20} /> */}
    </ol>
  );
}

export default GroceryList;