'use client';
import Typewriter from 'typewriter-effect';

export const TypingEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ['Christopher Ike', 'a Designer'],
        autoStart: true,
        loop: true,
        wrapperClassName: 'typewriter',
        cursorClassName: 'typeCursor',
      }}
    />
  );
};
