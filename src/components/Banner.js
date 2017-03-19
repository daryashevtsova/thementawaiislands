import React from 'react';
import debounce from 'lodash/debounce';
// import throttle from 'lodash/throttle';

import TypeWriter from './utility/TypeWriter';

import landingImage from '../../assets/images/landing-images/5.jpg';

import './styles/banner.css';

export default React.createClass({

  componentWillMount() {
    this.handleScroll =
      debounce(this.handleScroll, 150);
  },

  componentDidMount() {
    this.props.setTransparent(true);
    window.addEventListener('scroll',
      this.handleScroll
    );
    console.log('added banner listener');
  },

  componentWillUnmount() {
    window.removeEventListener('scroll',
      this.handleScroll
    );
    this.props.setTransparent(false);
    console.log('removed banner listener');
  },

  handleScroll() {
    let bottom = document
      .querySelector('.banner')
      .getBoundingClientRect()
      .bottom;
    if (bottom <= 80) {
      this.props.setTransparent(false);
      console.log('change the colour to dark');
    };
    if (bottom > 80) {
      this.props.setTransparent(true);
      console.log('change the colour to light');
    };
  },

  render() {
    return (
      <div
        className='banner'
      >
        <div className="banner-bg"
             style={{ backgroundImage: `url(${landingImage})` }} />
        <div className='banner-statement'>
          Mentawai Islands.
          <br />
          <TypeWriter>
            <span>#surf</span>
            <span>#perfection</span>
            <span>#stoked</span>
          </TypeWriter>
        </div>
      </div>
    )
  }

});