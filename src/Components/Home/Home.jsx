import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../Home/Home.css'
import one from '../../images/one.jpg';
import two from '../../images/two.jpg';

const slideImages = [  
  'https://images.unsplash.com/photo-1547825407-2d060104b7f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
//   'https://images.unsplash.com/photo-1474859569645-e0def92b02bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
//   'https://images.unsplash.com/photo-1464411335145-a52ac26409ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
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
          <div className="img" style={{'backgroundImage': `url(${one})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div className="img" style={{'backgroundImage': `url(${two})`}}>
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