import React from "react";
import {Tab_Item} from "./assets/scss/TabItem.scss";

function TabItem({no, name, active, selectTab}) {
  const onClick = () => {
    selectTab(no);
  };

  return (
     <li
      className={[Tab_Item, (active ? 'active' : '')].join(' ')}
      onClick={onClick}>
      {name}
    </li>
  );
}

export default TabItem;