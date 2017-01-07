/* styles (loaded first to allow overrides) */
import './App.css';

/* libraries */
import React from 'react';

/* project components */
import Header from './components/Header';
import Menu from './components/Menu';
import Banner from './components/Banner';

const App = React.createClass({
  render() {
    return (
      <div className='app-wrapper'>
        <Banner />
        <Header>
          <Menu />
        </Header>
        <div className='content'>
          CONTENT 1
        </div>
        <div className='content dark'>
          CONTENT 2
        </div>
        <div className='content'>
          CONTENT 3
        </div>
        <div className='content dark'>
          CONTENT 4
        </div>
      </div>
    );
  }
});

export default App;
