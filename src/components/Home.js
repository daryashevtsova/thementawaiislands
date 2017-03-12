/* libraries */
import React from 'react';

/* project components */
import Banner from './Banner';
import Footer from './Footer';

/* images */
import wave_collage from '../../assets/images/home/wave_collage.jpg';
import trip from '../../assets/images/home/trip.jpg';
import group from '../../assets/images/pictograms/group.png';
import destination from '../../assets/images/pictograms/destination.png';
import airport from '../../assets/images/pictograms/airport.png';
import accommodation from '../../assets/images/pictograms/accommodation.png';
import meals from '../../assets/images/pictograms/meals.png';
import surf from '../../assets/images/pictograms/surf.png';
import wave from '../../assets/images/pictograms/wave.png';
import ability from '../../assets/images/pictograms/ability.png';
import suited from '../../assets/images/pictograms/suited.png';
import line from '../../assets/images/pictograms/line.png';

/* styles */
import './styles/home.css';


export default ({ setTransparent }) => (
  <div className='home-wrapper'>

    <Banner
      setTransparent={setTransparent}
    />

    <div className='content'>
      <div
        className='wave'
        style={{ backgroundImage: `url(${wave_collage})` }}
      >
        <div className='wave-text'>
          <h1>
            AFFORDABLE ACCOMMODATION,
        </h1>
          <h1>
            IN TROPICAL ISLAND SURF PARADISE
        </h1>
          <h2>
            - MATUNGOU, THE MENTAWAI ISLANDS
        </h2>
        </div>
      </div>
    </div>

    <div className='content medium'>
      <div
        className='facts-img'
        style={{ backgroundImage: `url(${trip})` }}
      />
      <div className='facts-column'>

        <div className='facts-item'>
          <div
            className='facts-pic'
            style={{ backgroundImage: `url(${group})` }}
          />
          <p><b>Camp Size </b><br /><br />Max 8 Guests</p>
        </div>
        <div className='facts-item'>
          <div
            className='facts-pic'
            style={{ backgroundImage: `url(${destination})` }}
          />
          <p><b>Destination </b><br /><br />Northern Mentawai Islands, Indonesia</p>
        </div>
        <div className='facts-item'>
          <div
            className='facts-pic'
            style={{ backgroundImage: `url(${airport})` }}
          />
          <p><b>Airport </b><br /><br />Padang Minangkabau International , Western Sumatra</p>
        </div>
        <div className='facts-item'>
          <div
            className='facts-pic'
            style={{ backgroundImage: `url(${accommodation})` }}
          />
          <p><b>Accommodation </b><br /><br />Private Beachside Bungalows - 2/3 person</p>
        </div>
        <div className='facts-item'>
          <div
            className='facts-pic'
            style={{ backgroundImage: `url(${meals})` }}
          />
          <p><b>Meals: </b><br /><br />Breakfast, lunch and Dinner Included, Indonesian Style</p>
        </div>
      </div>

      <div className='facts-column invisible'>
        <div className='facts-item'>
          <div
            className='facts-pic'
            style={{ backgroundImage: `url(${surf})` }}
          />
          <p><b>Surf Access </b><br /><br />Private daily surf boat and Guide (just you and your crew)</p>
        </div>
        <div className='facts-item'>
          <div
            className='facts-pic'
            style={{ backgroundImage: `url(${wave})` }}
          />
          <p><b>Waves </b><br /><br />Playgrounds, Northern Mentawai - 20+ waves within 30 minutes. <span className='kandui-txt'>No Kandui</span>, Rifles, Bankvaults, Ebay are a few local big names</p>
        </div>
        <div className='facts-item'>
          <div
            className='facts-pic'
            style={{ backgroundImage: `url(${ability})` }}
          />
          <p><b>Surf Ability </b><br /><br />Intermediate to Professional</p>
        </div>
        <div className='facts-item'>
          <div
            className='facts-pic'
            style={{ backgroundImage: `url(${suited})` }}
          />
          <p><b>Best Suited For </b><br /><br />Medium-Budget travellers, Couples, Groups & Families</p>
        </div>
        <div className='facts-item'>
          <div
            className='facts-pic'
            style={{ backgroundImage: `url(${line})` }}
          />
          <p><b>Bottom-line </b><br /><br />Unbeatable value if you wish to experience a premium surf location without the commonly nauseating price-tag</p>
        </div>
      </div>

    </div>


    {/*<Footer />*/}

  </div>
);