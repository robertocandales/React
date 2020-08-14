import React from 'react';
import '../../Styles/Portfolio.css';
// import { makeStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';
import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player';
import Carousel from './Carousel';
import PortfolioSpring from './PortfololioSpring/PortfolioSpring';

const Portfolio = () => (
  <div className='container'>
    <div className='portfolio'>
      <h1>Portfolio </h1>
    </div>

    <div className='text'>
      {' '}
      <div className='sangria'>
        If you would like to review my portfolio, please visit my Github account for more
        information. There you can get code repositories from HTML, CSS, Javascript, ReactJS, React
        Native to examples with the MERN Stack and more. Due to confidentiality issues with my
        clients, part of my code is in private repositories.
        <br />
        <br />
        Here are I want show you couple of projects videos executed with React Native, Drawer
        Navigation and UI libraries libraries
      </div>
    </div>

    {/* Nuevo */}

    <Carousel />

    <div>
      <div className='title2'>React Native</div>
    </div>
    <div className='video'>
      <div className='hijo'>
        <div className='title1'>Music App</div>
        <ReactPlayer
          url={require('../Image/MusicApp2.mp4')}
          width='90%'
          height='50%'
          playing
          controls
        />
      </div>

      <div className='hijo'>
        <div className='title1'>Delivery App</div>
        <ReactPlayer
          url={require('../Image/showVideo.mp4')}
          width='90%'
          height='50%'
          playing
          controls
        />
      </div>
    </div>
    {/*<PortfolioSpring / >*/}
  </div>
);

export default Portfolio;
