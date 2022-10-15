import React, { useRef, useEffect, useState } from 'react';

import styled from 'styled-components';

const Carousel = styled.div`
  display: block;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    transition: opacity 0.4s ease-in-out;

    &.active {
      opacity: 1;
    }

    &.inactive {
      opacity: 0;
    }
  }
`;

type HeroProps = {
  children: JSX.Element;
};

const Hero: React.FC<HeroProps> = ({ children }) => {
  const [images, setImages] = useState<[JSX.Element]>(children.props.children);
  const [curImg, setCurImg] = useState<number>(0);

  useEffect(() => {
    // const imgs = children;
    const next: number = (curImg + 1) % images.length;
    const idTimer: ReturnType<typeof setTimeout> = setTimeout(
      () => setCurImg(next),
      5000
    );
    return () => clearTimeout(idTimer);
  }, [curImg]);

  return (
    <Carousel>
      {images.map((img, index) => {
        return (
          <img
            key={index}
            src={img.props.src}
            className={index === curImg ? 'active' : 'inactive'}
          />
        );
      })}
    </Carousel>
  );
};

export default Hero;
