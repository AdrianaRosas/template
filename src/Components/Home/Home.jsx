import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../Home/Home.css'

const slideImages = [  
  'https://43nnuk1fz4a72826eo14gwfb-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/53608848.png',
  'https://images.unsplash.com/photo-1566792639909-aa1dfada28ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'http://hdwallpaperfun.com/wp-content/uploads/2014/10/Tea-Cup-Drink-Wallpaper-High-Resolution-436258.jpg',
  'https://images.unsplash.com/photo-1531967802777-e0f8fc276609?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div className="img" style={{'backgroundImage': `url(${slideImages[3]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div className="img" style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div className="img" style={{'backgroundImage': `url(${slideImages[1]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div className="img" style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>
        </div>
      </Slide>
    )
}
export default Slideshow;