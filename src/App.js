/* styles (loaded first to allow overrides) */
import './App.css';

/* libraries */
import React from 'react';

/* project components */
import Header from './components/Header';
import Footer from './components/Footer';
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
    console.log(this.props.location.pathname);
    return (
      <div className='app-wrapper'>
        <Header transparent={this.state.transparentHeader}>
          <Menu />
          <MobileMenu />
        </Header>

        {React.cloneElement(this.props.children,
            { setTransparent: this.setTransparent })
        }

          {this.props.location.pathname !== "/booking" ? <Footer /> : ""}

      </div>
    );
  }

});