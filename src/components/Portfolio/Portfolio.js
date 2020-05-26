import React from 'react';
import '../../Styles/Portfolio.css';
// import { makeStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';
import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player';

const images = [
  {
    url: require('../Image/native.png'),
    title: 'Music App',
    width: '50%',
    height: '100%',
  },
  {
    url: require('../Image/home.png'),
    title: 'Delivery App',
    width: '50%',
    height: '100%',
  },
  {
    url: 'https://static.platzi.com/media/blog/mern-stack-284eedb6-ee6b-4441-b181-5064a453a15a.png',
    title: 'Stack MERN',
    width: '33%',
    height: '100%',
  },
];

const Portfolio = () => (
  <div className="container">
    <div className="portfolio">
      <h1>Portfolio </h1>
    </div>
    <div className="text">
      {' '}
      <div className="sangria">
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

    <div>
      <div className="title2">React Native</div>

      {/* <div className="video1 contanier">
        <div className="title1">Mexican Client (Music App)</div>
        <div>
          <Player>
            <source src={require('../Image/MusicApp2.mp4')} />
            <ControlBar disableCompletely className="my-class" />
          </Player>
        </div>
      </div>
      <div className="video1 contanier">
        <div className="title1">Delivery App</div>
        <div className="mt-10 ">
          <Player>
            <source src={require('../Image/showVideo.mp4')} />
            <ControlBar disableCompletely className="my-class" />
          </Player>
        </div>
      </div> */}
      <div className="title1">Mexican Client (Music App)</div>

      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={require('../Image/MusicApp2.mp4')}
          width="100%"
          height="100%"
          playing
          controls
        />
      </div>

      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={require('../Image/showVideo.mp4')}
          width="100%"
          height="100%"
          playing
          controls
        />
      </div>
      <div className="title1">Delivery App</div>
    </div>
  </div>
);

export default Portfolio;

//  <Player fluid={false} width={150}>
//    <source src={require('../Image/showVideo.mp4')} />
//    <ControlBar disableCompletely className="my-class" />
//  </Player>;
