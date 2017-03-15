/* styles (loaded first to allow overrides) */
import './App.css';

/* libraries */
import React from 'react';

/* project components */
import Header from './components/Header';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';

export default React.createClass({

  getInitialState() {
    return {
      transparentHeader: false
    };
  },

  setTransparent(bool) {
    this.setState({
      transparentHeader: bool
    });
  },

  render() {
    return (
      <div className='app-wrapper'>
        {React.cloneElement(this.props.children,
          { setTransparent: this.setTransparent })
        }
        <Header transparent={this.state.transparentHeader}>
          <Menu />
          <MobileMenu />
        </Header>
      </div>
    );
  }

});