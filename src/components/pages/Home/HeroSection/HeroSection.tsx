import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Button } from 'src/styles/Button';
import { Colors } from 'src/styles/Color';
import { Container, Para } from 'src/styles/Common_Style';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Wrapper>
      <Title>Where hiring comes together.</Title>
      <Para>
        Everything you need to organise your hiring and make a great impression.
      </Para>

      <Button bg={Colors.btn_primary_bg} h={56} font_size={18} w={242}>
        Get started — It’s free!
      </Button>

      <Cursor
        as={motion.div}
        className="cursor alexande"
        initial={{
          x: '20%',
          y: 0,
        }}
        animate={{
          x: '35%',
          y: 40,
        }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
      >
        <Image
          src="/assets/images/alexande.png"
          width={85}
          height={50}
          alt="alexande"
        />
      </Cursor>
      <Cursor
        as={motion.div}
        className="cursor bouba"
        initial={{
          x: '5%',
          y: 20,
        }}
        animate={{
          x: '45%',
          y: 10,
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          delay: 0.3,
        }}
      >
        <Image
          src="/assets/images/bouba.png"
          width={63}
          height={50}
          alt="bouba"
        />
      </Cursor>
      <Cursor
        as={motion.div}
        className="cursor lily"
        initial={{
          x: '5%',
          y: 20,
        }}
        animate={{
          x: '45%',
          y: 10,
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          delay: 0.3,
        }}
      >
        <Image
          src="/assets/images/lily.png"
          width={46}
          height={50}
          alt="lily"
        />
      </Cursor>

      <Cursor
        as={motion.div}
        className="cursor charlotte"
        initial={{
          x: '5%',
          y: 50,
        }}
        animate={{
          x: '45%',
          y: 42,
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          delay: 0.3,
        }}
      >
        <Image
          src="/assets/images/charlotte.png"
          width={81}
          height={50}
          alt="charlotte"
        />
      </Cursor>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px auto 100px auto;
  text-align: center;
  flex-direction: column;
  position: relative;

  & > button {
    margin-top: 30px;
  }

  & > p {
    width: 100%;
    max-width: 450px;
    margin-top: 25px;
  }
`;

const Title = styled.div`
  font-weight: 800;
  font-size: clamp(1.5em, 6vw, 4em);
  line-height: 1.2em;
  color: #1b1b1a;
  width: 100%;
  max-width: 600px;
`;

export const Cursor = styled.div`
  position: absolute;

  &.alexande {
    top: 0;
    left: 30%;
    transform: translateX(-50%);
  }
  &.bouba {
    bottom: 40%;
    left: 30%;
    transform: translateX(-50%);
  }
  &.lily {
    top: 5%;
    right: 25%;
  }
  &.charlotte {
    bottom: 25%;
    right: 25%;
  }
`;
