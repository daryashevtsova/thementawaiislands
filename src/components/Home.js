import React from 'react';

import Banner from './Banner';

// images
import wave_collage from '../../assets/images/home/wave_collage.jpg';
import packegesImg from '../../assets/images/home/Matungou_Brochure_2017-6.jpg';
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

import './styles/home.css';

export default ({setTransparent}) => (
  <div className='home-wrapper'>

    <Banner
      setTransparent={setTransparent}
    />


    <div className='content-wave'>

        <div className='wave-text'>
          <h1>
            AFFORDABLE ACCOMMODATION,
          <br />
            IN TROPICAL ISLAND SURF PARADISE
          </h1>
          <h2>
            - MATUNGOU, THE MENTAWAI ISLANDS
          </h2>
        </div>

        <div
            className='wave'
            style={{ backgroundImage: `url(${wave_collage})` }}
        />

    </div>


    <div className='content-surf'>
      <div
        className='trip-img'
        style={{ backgroundImage: `url(${trip})` }}
      />
      <div className='trip-content'>

        <div className='trip-desc'>
          <div
            className='trip-pic'
            style={{ backgroundImage: `url(${group})` }}
          />
          <p><b>Camp Size </b><br /><br />Max 8 Guests</p>
        </div>
        <div className='trip-desc'>
          <div
            className='trip-pic'
            style={{ backgroundImage: `url(${destination})` }}
          />
          <p><b>Destination </b><br /><br />Northern Mentawai Islands, Indonesia</p>
        </div>
        <div className='trip-desc'>
          <div
            className='trip-pic'
            style={{ backgroundImage: `url(${airport})` }}
          />
          <p><b>Airport </b><br /><br />Padang Minangkabau International , Western Sumatra</p>
        </div>
        <div className='trip-desc'>
          <div
            className='trip-pic'
            style={{ backgroundImage: `url(${accommodation})` }}
          />
          <p><b>Accommodation </b><br /><br />Private Beachside Bungalows - 2/3 person</p>
        </div>
        <div className='trip-desc'>
          <div
            className='trip-pic'
            style={{ backgroundImage: `url(${meals})` }}
          />
          <p><b>Meals: </b><br /><br />Breakfast, lunch and Dinner Included, Indonesian Style</p>
        </div>
      </div>

      <div className='trip-content'>
        <div className='trip-desc'>
          <div
            className='trip-pic'
            style={{ backgroundImage: `url(${surf})` }}
          />
          <p><b>Surf Access </b><br /><br />Private daily surf boat and Guide (just you and your crew)</p>
        </div>
        <div className='trip-desc'>
          <div
            className='trip-pic'
            style={{ backgroundImage: `url(${wave})` }}
          />
          <p><b>Waves </b><br /><br />Playgrounds, Northern Mentawai - 20+ waves within 30 minutes. <span className='kandui-txt'>No Kandui</span>, Rifles, Bankvaults, Ebay are a few local big names</p>
        </div>
        <div className='trip-desc'>
          <div
            className='trip-pic'
            style={{ backgroundImage: `url(${ability})` }}
          />
          <p><b>Surf Ability </b><br /><br />Intermediate to Professional</p>
        </div>
        <div className='trip-desc'>
          <div
            className='trip-pic'
            style={{ backgroundImage: `url(${suited})` }}
          />
          <p><b>Best Suited For </b><br /><br />Medium-Budget travellers, Couples, Groups & Families</p>
        </div>
        <div className='trip-desc'>
          <div
            className='trip-pic'
            style={{ backgroundImage: `url(${line})` }}
          />
          <p><b>Bottom-line </b><br /><br />Unbeatable value if you wish to experience a premium surf location without the commonly nauseating price-tag</p>
        </div>
      </div>

    </div>



    <div className='content-packages'>

      <div className='content-packages-body'>
        <h1 className="packages-main-title">PACKAGES</h1>
        <h2 className="packages-title">Prices starting from $125 per person per day (all inclusive)</h2>
        <h2 className="packages-title">Included in ALL Packages:</h2>
        <p> Price includes pick-up / drop-off from Siberut <b>(If you wish to travel via Tua Pejat there will be an additional charge of $150 for each pick-up / drop-off per group)</b></p>
        <ul>
          <li>1 x Private speed boat per group for daily use - 2 trips daily</li>
          <li>1 x Beach Front Bungalows with large fans in each bungalow</li>
          <li>Western style bathroom</li>
          <li>3 X Meals per day (Breakfast / Lunch / Dinner)</li>
          <li>Omelettes and Noodles whenever you wish!</li>
          <li>Drinking Water, Tea, Coffee</li>
        </ul>
        <h2 className="packages-title">Not Included:</h2>
        <p>Transfer from Airport to arrival into The Mentawai
        Wifi - $10 USD per hour or $30 Unlimited.<br />
        (We are sorry to charge for internet but it is extremely expensive to get internet to the island)
          Service charge (Feel free to tip our staff directly) </p>
        <h2 className="packages-title">Also available but not included:</h2>
        <ul>
          <li>Soft drinks - coke/sprite/pocari</li>
          <li>Bintang</li>
          <li>Clothes washing facilities</li>
          <li>Direct Speedboat Transfer from Padang to Matungou -</li>
          <li>See alternative Transfer options</li>
        </ul>
      </div>


      <div className='content-packages-img'
           style={{backgroundImage: `url(${packegesImg}`}}
      />

    </div>


    <div className='content md dark-2'>
      CONTENT 4
    </div>



    {/*<Footer />*/}

  </div>
);