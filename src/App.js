/* styles (loaded first to prevent overrides) */
import 'react-mdl/extra/material.css';
import './App.css';

/* static assets */
import 'react-mdl/extra/material.js';

/* libraries */
import React from 'react';

/* community components */
import { Layout, Content } from 'react-mdl';

/* project components */
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const App = React.createClass({
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header>
            <Menu />
            <MobileMenu />
          </Header>
          <Content>
            <Gallery />
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
