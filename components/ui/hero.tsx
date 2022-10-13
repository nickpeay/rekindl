// TODO: pass images as childred from index -> will be props, no need for ref

import React, { useRef, useEffect, useState } from 'react';
import type { NextPage } from 'next';

type HeroProps = {
  children: [];
};

const Hero: React.FC<HeroProps> = ({ children }) => {
  console.log(children);
  const [curImg, setCurImg] = useState<number>(0);

  useEffect(() => {
    const imgs = children;
    const next: number = (curImg + 1) % imgs.length;
    const idTimer: ReturnType<typeof setTimeout> = setTimeout(
      () => setCurImg(next),
      5000
    );
    return () => clearTimeout(idTimer);
  }, [curImg]);

  return <div id='hero-images'>{children}</div>;
};

export default Hero;
