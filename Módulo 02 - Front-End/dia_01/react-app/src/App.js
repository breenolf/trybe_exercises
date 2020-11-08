import React from 'react';
import './App.css';
import TaskComponent from './TaskComponent';
import Activities from './Data'

class App extends React.Component {
  render() {
    return Activities.map(task => TaskComponent(task));
  }
}

export default App;
