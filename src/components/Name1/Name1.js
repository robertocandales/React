import React, { useRef, useState, useEffect, useCallback } from 'react';
import { render } from 'react-dom';
import { useTransition, animated } from 'react-spring';
import './styles.css';

function Name1() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 100,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  });
  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(['Hi', 'Im Roberto']), 2000));
    ref.current.push(setTimeout(() => set(['Web Developer']), 5000));
    ref.current.push(setTimeout(() => set(['HTML CSS Javascript']), 8000));
  }, []);

  useEffect(() => reset(), []);
  //  useEffect(() => {
  //    setInterval(() => {
  //      reset();
  //    }, 10000);
  //  }, []);
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div
          className='transitions-item'
          key={key}
          style={rest}
          onClick={reset}
          style={{ width: '100%', height: '100%' }}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  );
}
export default Name1;
//render(<Name1 />, document.getElementById('root'))
