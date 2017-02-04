/* styles (loaded first to allow overrides) */
import './App.css';

/* libraries */
import React from 'react';

/* project components */
import Header from './components/Header';
import Menu from './components/Menu';

export default React.createClass({

  handleScroll() {
    console.log('window scrolled');
  },

  render() {
    return (
      <div className='app-wrapper'>
        {React.cloneElement(this.props.children, {
          handleScroll: this.handleScroll
        })}
        <Header>
          <Menu />
        </Header>
      </div>
    )
  }

});