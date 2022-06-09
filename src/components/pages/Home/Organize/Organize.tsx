import React from 'react';
import { Container, Grid } from 'src/styles/Common_Style';
import styled from 'styled-components';
import Candidate from './Candidate';
import TextSection from 'src/components/TextSection';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'src/hooks/useMediaQuery';

const Organize = () => {
  const isMediumDevice = useMediaQuery('(min-width: 992px)');
  return (
    <Wrapper>
      <Grid>
        <div className="grid-item text-section">
          <TextSection
            smText="Organize"
            bigText="Organize your hiring"
            description="A hiring flow you can wrap your head around."
            smTextColor={'light-green'}
          />
        </div>
        <Interactive className="grid-item interactive-section">
          <motion.div
            className="interview"
            initial={
              isMediumDevice && {
                x: 0,
              }
            }
            animate={
              isMediumDevice && {
                x: 270,
              }
            }
            transition={
              isMediumDevice
                ? {
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 1.5,
                    delay: 0.3,
                  }
                : undefined
            }
          >
            <h3>Interview</h3>
            <Candidate />
          </motion.div>
          <div className="offer">
            <h3>Offer</h3>
            <div className="offer-border">
              <div className="offer-bg"></div>
            </div>
          </div>
        </Interactive>
      </Grid>
    </Wrapper>
  );
};

export default Organize;

const Wrapper = styled(Container)`
  padding: 90px 2em;

  p {
    font-family: 'Inter';
    font-size: 14px;
    line-height: 100%;
    opacity: 0.8;
  }

  .interactive-section {
    display: grid;
    grid-gap: 20px;

    h3 {
      text-align: center;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;
      opacity: 0.5;
      margin-bottom: 20px;
    }

    & > .interview,
    .offer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    & > .offer .offer-border {
      border: 2px dashed #7348ff;
      border-radius: 12px;
      width: 100%;
      max-width: 305px;
      height: 124px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > .offer .offer-bg {
      width: 100%;
      margin: 4px;
      height: 108px;
      background-color: #7348ff;
      opacity: 0.1;
      border-radius: 8px;
    }
  }

  @media (min-width: 992px) {
    padding: 90px 0;
    .text-section {
      h1 {
        margin-bottom: 15px;
      }
    }
    .interactive-section {
      padding: 2em;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`;

export const Interactive = styled.div`
  padding: 1em;
  background: #f2f1f0;
  border-radius: 12px;
  width: 100%;
  max-width: 740px;
  height: 380px;
`;
