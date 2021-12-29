
import { Component } from 'react';
import './App.css';
import NavBar from './componants/NavBar';
import News from './componants/News';

export default class App extends Component {
render () {
  return (
    <div>
      <NavBar />
      <News />
    </div>
  )
}
}


