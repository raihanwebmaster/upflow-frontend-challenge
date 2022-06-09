import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import SocialInfo from 'src/components/SocialInfo';
import styled, { css } from 'styled-components';
import Send from '../../../../assets/svg/send.svg';
import { Cursor } from '../HeroSection/HeroSection';

interface props {
  withNote?: boolean;
}
const Candidate: React.FC<props> = ({ withNote }) => {
  return (
    <Container withNote={withNote}>
      <div className="info">
        <div className="avatar">
          <Image
            src="/assets/images/candidate.png"
            alt="candidate"
            layout="fixed"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h1>Alex Bernard</h1>
          <p>Software Engineer</p>
        </div>
      </div>
      <SocialInfo noteList={3} viaName={'LinkedIn'} />
      {withNote && (
        <NoteInput>
          <p>Leave a note</p>
          <Send />
        </NoteInput>
      )}

      {withNote && (
        <>
          <Cursor
            as={motion.div}
            className="cursor alexande"
            initial={{
              x: -'120%',
              y: 0,
            }}
            animate={{
              x: '35%',
              y: 40,
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatType: 'reverse',
            }}
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
              x: '115%',
              y: 120,
            }}
            animate={{
              x: '45%',
              y: 100,
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
              x: '215%',
              y: 20,
            }}
            animate={{
              x: '180%',
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
              x: -'315%',
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
        </>
      )}
    </Container>
  );
};

export default Candidate;

export const Wrapper = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0px 48px 64px rgba(27, 27, 26, 0.02),
    0px 40px 40px rgba(27, 27, 26, 0.02), 0px 24px 24px rgba(27, 27, 26, 0.06),
    0px 4px 6px rgba(27, 27, 26, 0.08), 0px 2px 2px -1px rgba(27, 27, 26, 0.06),
    0px 12px 14px -8px rgba(27, 27, 26, 0.04),
    0px 0px 0px 1px rgba(27, 27, 26, 0.12);
  border-radius: 12px;
  width: 100%;
  max-width: 305px;
  /* height: 124px; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled(Wrapper)<{ withNote?: boolean }>`
  ${({ withNote }) =>
    withNote &&
    css`
      &:after {
        content: '';
        position: absolute;
        width: 95%;
        height: 100%;
        top: 10px;
        left: 2%;

        background-color: #fff;
        box-shadow: 0px 48px 64px rgba(27, 27, 26, 0.02),
          0px 40px 40px rgba(27, 27, 26, 0.02),
          0px 24px 24px rgba(27, 27, 26, 0.06),
          0px 4px 6px rgba(27, 27, 26, 0.08),
          0px 2px 2px -1px rgba(27, 27, 26, 0.06),
          0px 12px 14px -8px rgba(27, 27, 26, 0.04),
          0px 0px 0px 1px rgba(27, 27, 26, 0.12);
        z-index: -1;
        border-radius: 12px;
      }

      &:before {
        content: '';
        position: absolute;
        width: 90%;
        height: 100%;
        top: 20px;
        left: 4%;

        background-color: #fff;
        box-shadow: 0px 48px 64px rgba(27, 27, 26, 0.02),
          0px 40px 40px rgba(27, 27, 26, 0.02),
          0px 24px 24px rgba(27, 27, 26, 0.06),
          0px 4px 6px rgba(27, 27, 26, 0.08),
          0px 2px 2px -1px rgba(27, 27, 26, 0.06),
          0px 12px 14px -8px rgba(27, 27, 26, 0.04),
          0px 0px 0px 1px rgba(27, 27, 26, 0.12);
        z-index: -1;
        border-radius: 12px;
      }
    `}
  & > .info {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    h1 {
      margin-bottom: 5px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      color: #1b1b1a;
    }

    p {
      font-size: 14px;
    }
  }
`;

const NoteInput = styled.div`
  background: #f2f1f0;
  border-radius: 12px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin-top: 10px;

  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  opacity: 0.6;
`;
