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
      transparentHeader: false,
      isMenuOpen: false
    };
  },

  setTransparent(bool) {
    this.setState({
      transparentHeader: bool
    });
  },

  toggleMobileMenu(state) {
    this.setState({
      isMenuOpen: state.isOpen
    })
  },

  render() {
    return (
      <div className='app-wrapper'>
        {React.cloneElement(this.props.children,
          { setTransparent: this.setTransparent })
        }
        <Header transparent={this.state.transparentHeader}>
          <Menu />
          <MobileMenu
            isOpen={this.state.isMenuOpen}
            handleStateChange={this.toggleMobileMenu}
          />
        </Header>
      </div>
    );
  }

});