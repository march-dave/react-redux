import React, {PropTypes} from 'react';
import {createStore} from 'redux';

const List = ({ items, filterBy }) => {  
  return (
    <ul>
      {
        items
          .filter(item => item.indexOf(filterBy) > -1)
          .map((item, i) => <li key={i}>{item}</li>)
      } 
    </ul>
  )
}

function setFilter(by) {  
  return { type: 'SET_FILTER', by:by };
}

const initialState = {  
  filterBy: ''
}
function reducer(state = initialState, action) {  
  switch (action.type) {
    case 'SET_FILTER':
      return Object.assign({}, state, {
        filterBy: action.by
      })
    default:
      return state
  }
}

const store = createStore(reducer);

export default class FilterList extends React.Component {
  constructor() {
    super();
    // our default state, filter by nothing
    this.state = store.getState();
    this.unsubscribe = store.subscribe( () => {
      this.setState(store.getState());
    });
  }
  // function that triggers on every change in the input box
  updateFilter(ev) {
    store.dispatch(setFilter(ev.target.value));
    // this.setState({ filterBy: ev.target.value });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { filterBy } = this.state;
    const frameworks = ['React', 'Angular', 'Vue', 'Ember'];
    // simple input box and our List component
    return (
      <div>
        <input type="text" onChange={(ev) => this.updateFilter(ev) }/>
        <List items={frameworks} filterBy={filterBy} />
      </div>
    )
  }
}

FilterList.propTypes = {
};
