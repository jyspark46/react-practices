import React from 'react';
import TabItem from './TabItem';
import {Tabs_} from './assets/scss/Tabs.scss';

function Tabs({tabs, selectTab}) {
    return (
      <ul className={Tabs_}>
        {
          tabs.map(e => <TabItem
              key={e.no}
              no={e.no}
              name={e.name}
              active={e.active}
              selectTab={selectTab} />)
        }
      </ul>
    );
}

export default Tabs;