import React, { Component } from 'react';
import GroceryItems from './GroceryItems';

class GroceryList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ol className={"grocery-list"}>
        {
          this.props.groceries.map(e => <GroceryItems
            key={e.no}
            name={e.name}
            count={e.count} />)
        }
      </ol>
    );
  }
}

export default GroceryList;