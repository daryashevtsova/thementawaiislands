/* libraries */
import React from 'react';

/* community components */
import ImageGallery from 'react-image-gallery';
import { Layout, Header, Content } from 'react-mdl';

/* project components */
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

/* project helpers */
import { renderVideo } from './helpers/video';

/* static assets */
import 'react-mdl/extra/material.js';

/* styles */
import 'react-mdl/extra/material.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import './App.css';

/* images */
import logo from '../assets/images/logo.png';
import compilation1 from '../assets/images/carousel-home/compilation1.jpg';
import compilation2 from '../assets/images/carousel-home/compilation2.jpg';
import compilation3 from '../assets/images/carousel-home/compilation3.jpg';
import wooden_sign from '../assets/images/carousel-home/wooden_sign.jpg';
import air from '../assets/images/carousel-home/air.jpg';

/* constants */
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
    renderItem: renderVideo
  }
]

const App = React.createClass({
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <a href='/'>
                  <img src={logo} style={{width: '100%'}} role='presentation' />
                </a>
              </span>
            }
            >
            <Menu />
            <MobileMenu />
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
            <div className='content'>
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
