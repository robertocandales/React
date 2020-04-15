import React from 'react';
import '../Styles/navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import RC from './Image/RC.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/robertocandales/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            {' '}
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="https://github.com/robertocandales" rel="noopener noreferrer" target="_blank">
              github
            </a>
          </li>
          <li className="web">
            <a href="web" className={classes.root}>
              <Avatar alt="Roberto Candales" src={RC} className={classes.large} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
