import React, { useState } from 'react';
import { render } from 'react-dom';
import { useTrail, animated } from 'react-spring';
import './styles.css';

const items = ['Hi', 'Im Roberto', 'Web Developer'];
const items1 = ['HTML / CSS / Javascript / React'];
const config = { mass: 5, tension: 500, friction: 200 };
const Name = () => {
  const [loading, setloading] = React.useState(false);
  React.useEffect(() => {
    setloading(true);
    const timer = () => {
      setInterval(() => {
        set((state) => !state);
      }, 5000);
    };
    timer();
  }, []);
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  const trail1 = useTrail(items1.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div>
      {loading ? (
        <div className='trails-main'>
          <div>
            {trail.map(({ x, height, ...rest }, index) => (
              <animated.div
                key={items[index]}
                className='trails-text'
                style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                <animated.div style={{ height }}>{items[index]}</animated.div>
              </animated.div>
            ))}
            {trail1.map(({ x, height, ...rest }, index) => (
              <animated.div
                key={items1[index]}
                className='trails-text1'
                style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                <animated.div style={{ height }}>{items1[index]}</animated.div>
              </animated.div>
            ))}

            <div className='text' style={{ marginTop: '-200px' }}>
              <a href='mailto:candales.roberto@gmail.com?Subject=Interesado%20en%20el%20curso'>
                Contact me
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Name;
//render(<Name />, document.getElementById('root'));
