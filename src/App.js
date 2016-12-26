import React from 'react';
import ImageGallery from 'react-image-gallery';
import {
  Layout,
  Header,
  Navigation,
  Content,
} from 'react-mdl';

import Menu from './components/Menu';
import Footer from './components/Footer';

/* static assets */
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import 'react-image-gallery/styles/css/image-gallery.css';
import './App.css';
import logo from '../assets/images/logo.png';
import compilation1 from '../assets/images/carousel-home/compilation1.jpg';
import compilation2 from '../assets/images/carousel-home/compilation2.jpg';
import compilation3 from '../assets/images/carousel-home/compilation3.jpg';
import wooden_sign from '../assets/images/carousel-home/wooden_sign.jpg';
import air from '../assets/images/carousel-home/air.jpg';
import BRGMenu from 'react-burger-menu';

const BurgerMenu = BRGMenu.bubble;

var styles = {
  bmMenu: {
    background: '#373a47',
    padding: '0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

/* constants */
const _renderVideo = () => (
  <div>
    <iframe
      src="https://player.vimeo.com/video/142271928" // ?title=0&byline=0&portrait=0"
      webkitAllowFullScreen
      mozallowfullscreen
      allowFullScreen
      style={{
        border: '0',
        width: '100%',
        height: '509px',
        frameborder: '0',
      }}/>
  </div>
);
const IMAGES = [
  {
    original: compilation1
  },
  {
    original: compilation2
  },
  {
    original: compilation3
  },
  {
    original: wooden_sign
  },
  {
    original: air
  },
  {
    renderItem: _renderVideo
  }
]

const App = React.createClass({
  render() {
    return (
      <div style={{height: '100%'}}>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <a href="/">
                  <img src={logo} style={{width: '150px'}} role='presentation' />
                </a>
              </span>
            }
            style={{backgroundColor: 'white'}}
            >
            <Menu />
            <BurgerMenu right styles={styles} />

          </Header>
          <Content>
            <ImageGallery
              ref={i => this._imageGallery = i}
              items={IMAGES}
              autoPlay={true}
              slideInterval={8000}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
              disableArrowKeys={false} />
            <div className="content">
              content
            </div>
            <Footer />
          </Content>
        </Layout>
      </div>
    );
  }
});

export default App;
