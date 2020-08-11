import React from 'react';
import './Carousel.css'
import { Picture } from './pictures/Pictures';
import { portefy1 } from './pictures/Pictures';
import { distrito } from './pictures/Pictures';
import { distrito02 } from './pictures/Pictures';
import { distrito03 } from './pictures/Pictures';
import { Rutas1 } from './pictures/Pictures';
import { Rutas2 } from './pictures/Pictures';
import { Rutas3 } from './pictures/Pictures';
import { Rutas4 } from './pictures/Pictures';
import { Rutas5 } from './pictures/Pictures';
import { Rutas6 } from './pictures/Pictures';
import { Rutas7 } from './pictures/Pictures';
import { Rutas8 } from './pictures/Pictures';
import { Rutas9 } from './pictures/Pictures';
import { tracking1 } from './pictures/Pictures';

const Carousel = () => {
  return (
    <div>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-ride='carousel'
        style={{ padding: '20px' }}>
        <ol className='carousel-indicators'>
          <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='3'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='4'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='5'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='6'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='7'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='8'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='9'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='10'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='11'></li>{' '}
          <li data-target='#carouselExampleIndicators' data-slide-to='12'></li>{' '}

        </ol>

        <div className='carousel-inner'  >
          <div className='carousel-item ' >
            <img className='d-block w-100' src={distrito} alt='First slide' />
          </div>{' '}
          <div className='carousel-item item' >
            <img className='d-block w-100 mh-50'  src={distrito02} alt='Second slide'  />
          </div>
          <div className='carousel-item item' >
            <img className='d-block w-100 mh-50 size'  src={distrito03} alt='Second slide'  />
          </div>
          <div className='carousel-item active'>
            <img className='d-block w-100' src={portefy1} alt='Third slide' />
          </div>
         
          {/* <div className='carousel-item'>
            <img className='d-block w-100' src={Rutas1} alt='fourth slide' style={{height:'400px'}} />
          </div>{' '} */}
          <div className='carousel-item'>
            <img className='d-block w-100' src={Rutas2} alt='fifth slide' />
          </div>{' '}
          <div className='carousel-item'>
            <img className='d-block w-100' src={Rutas3} alt='sixth slide' />
          </div>{' '}
          <div className='carousel-item'>
            <img className='d-block w-100' src={Rutas4} alt='seventh slide' />
          </div>{' '}
          <div className='carousel-item'>
            <img className='d-block w-100' src={Rutas5} alt='eighth slide' />
          </div>{' '}
          {/* <div className='carousel-item'>
            <img className='d-block w-100 size'  src={Rutas6} alt='ninth slide'  />
          </div>{' '} */}
          <div className='carousel-item'>
            <img className='d-block w-100' src={Rutas7} alt='tenth slide' />
          </div>{' '}
          <div className='carousel-item'>
            <img className='d-block w-100 size' src={Rutas8} alt='eleventh slide' />
          </div>{' '}
          <div className='carousel-item'>
            <img className='d-block w-100 size' src={Rutas9} alt='twelfth slide'  />
          </div>
          <div className='carousel-item'>
            <img className='d-block w-100' src={tracking1} alt='therteenth slide' />
          </div>{' '}
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
