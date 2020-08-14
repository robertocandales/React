import React, { useState, useRef } from "react";
import { animated, useChain, useSpring, useTransition } from "react-spring";

import styled, { ThemeProvider } from "styled-components";

import { Box } from "./ui/atoms/box";
import { Container } from "./ui/atoms/container";
import { Typography } from "./ui/atoms/typography";
import { Flex } from "./ui/atoms/flex";
import { Grid } from "./ui/atoms/grid";

import { theme } from "./ui/theme";
import "./ui/molecules/global-styles/global.css";

import data from "./data";
import { backgroundColor } from "styled-system";

const AnimatedFlex = styled(animated(Flex))``;
AnimatedFlex.defaultProps = {};

const AnimatedBanner = styled(animated(Flex))`
  cursor: pointer;
  
`;
AnimatedBanner.defaultProps = {
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  willChange: "transform, opacity"
 
};

const Title = styled(animated(Typography))``;
Title.defaultProps = {
  fontSize: 7,
  lineHeight: "42px",
  bg: "rgba(255, 255, 255, 0.5)",
  mx: 2,
  p: [2, null, 4],
  textAlign: "center",
  fontWeight: 2,
  overflow: "hidden"
};

const AnimatedContainer = styled(animated(Grid))``;
AnimatedContainer.defaultProps = {
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gridGap: 1,
  borderRadius: 1,
  willChange: "width, height"
};

const AnimatedItem = styled(animated(Box))``;
AnimatedItem.defaultProps = {
  width: "100%",
  height: 200,
  background: "black",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  willChange: "transform, opacity"
};

const JobDescription = () => {
    const [clicked, setClicked] = useState(false);

  //https://konstantinlebedev.com/animate-units-react-spring/
  const vhToPixel = value => `${(window.innerHeight * value) / 100}px`;
  // const vwToPixel = value => `${(window.innerWidth * value) / 100}px`;
  const animatedBannerRef = useRef();
  const animatedBannerProps = useSpring({
      
    ref: animatedBannerRef,
    height: clicked ? "100px" : vhToPixel(100),
    opacity: clicked ? 0.6 : 1,
    from: {
      height: vhToPixel(100),
      opacity: 1
    }
    
  });

  const titleRef = useRef();
  const titleProps = useSpring({
    ref: titleRef,
    opacity: clicked ? 0 : 1,
    transform: clicked ? "translateY(-100%)" : "translateY(0%)",
    transformOrigin: "0 0",
    from: {
      opacity: 0,
      transform: "translateY(-100%)"
    },
    
  });

  const animatedContainerProps = useSpring({
    padding: clicked ? 32 : 10,
    from: {
      padding: 10
    }
  });

  const animatedItemsRef = useRef();
  const transitions = useTransition(clicked ? data : [], item => item, {
      
    // set trail and config values to 0 when clicked === false to prevent unfinished animation
    ref: animatedItemsRef,
    unique: true,
    // trail: 500 / data.length,
    trail: clicked ? 500 / data.length : 0,
    transformOrigin: "100% 100%",
    from: {
      opacity: 0,
      transform: "scale(0)"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      
    },
    leave: {
      opacity: 0,
      transform: "scale(0)"
    },
    config: { duration: clicked ? 500 : 0 }
  });

  useChain(
    clicked
      ? [titleRef, animatedItemsRef, animatedBannerRef]
      : [animatedItemsRef, titleRef, animatedBannerRef],
    [0, 0.5]
  );

    return (
        <ThemeProvider theme={theme} >
      <Box bg="bg50" minHeight="100vh" style={{ padding:'50px'}}>
        <AnimatedBanner
          style={animatedBannerProps}
          background={`url(${data[0]})`}
          onClick={() => setClicked(!clicked)}
          alignItems="center"
          justifyContent="center"
        >
          <Flex flexDirection="column" justifyContent="center">
            <Title style={titleProps}>
            About me
              <Typography fontSize={3} opacity={0.9} pt={3} lineHeight={1}>
              I am a self-motivated individual who thrives on succeeding in challenging situations. I am
        passionate about Professional development opportunities and welcome every opportunity to
        take my capabilities to a higher level. <br />
        <br />
        I am suitably qualified with a degree in Electrical Engineering, relevant experience and the
        skillset required to make a positive and valuable contribution to your company. I am a
        front-end developer who has a wide range of front end skills, mainly with javascript
        language stack (HTML, CSS, Javascript, ReactJS/Redux, React Natice, Node.js, Express,
        API-Rest) <br />
        <br />
        I really enjoy writing optimised object code and am very good at building and maintaining
        applications that support the solutions delivered to both internal and external customers. I
        always look to add my own magical touch to any new code that I write,and would like to
        mention that I love learning and continually expanding my knowledge stack and I think that
        is my main skill. <br />
        <br />I consider myself a real team player who understands the importance of teamwork,
        collaboration, and open communication. In addition to this I am not only commercially aware,
        proactive, adaptable and flexible, but also able to work in an environment which changes at
        a fast pace.
              </Typography>
              <Typography fontSize={3} opacity={0.7} pt={1} lineHeight={2}>
                Click to preview gallery
              </Typography>
            </Title>
          </Flex>
        </AnimatedBanner>
        <Container>
          <AnimatedContainer style={animatedContainerProps}>
            {transitions.map(({ item, key, props }) => (
              <AnimatedItem
                key={key}
                background={`url(${item}?auto=compress&cs=tinysrgb&dpr=1&w=500)`}
                style={{ ...props }}
              />
            ))}
          </AnimatedContainer>
        </Container>
      </Box>
    </ThemeProvider>
    )
}

export default JobDescription
