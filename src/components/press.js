import React from 'react';

import { IMAGES } from '../constants/images.js';
import './styles/press.css';

function PressItem(props) {
    console.log(props);
    let imgSrc = props.imgSrc;
    return (
        <a href="#" className="press-item" >
            <div className="press-item-img"  style={{backgroundImage: `url(${imgSrc})`}} />
            <div className="press-item-title">{props.caption}</div>
        </a>
    )
}

export default function() {
    console.log(IMAGES);
    let list = IMAGES.map((item, index)=> <PressItem imgSrc={item.src} caption={item.caption} key={index} />)
    return (
        <div className='press'>
            {list}
        </div>
    )
}
