import Image from 'next/image';
import React from 'react';
import TextSection from 'src/components/TextSection';
import { Container, Grid } from 'src/styles/Common_Style';
import styled from 'styled-components';
import { Interactive } from '../Organize/Organize';

const Connect = () => {
  return (
    <Container>
      <Grid>
        <div className="grid-item text-section">
          <TextSection
            smText="Connect"
            bigText="Connect with candidates"
            description="Stand out and show candidates who you are."
            smTextColor={'light-blue'}
          />
        </div>
        <Interactive className="grid-item interactive-section">
          <Wrapper>
            <div className="person">
              <Image
                src={'/assets/images/peter.png'}
                alt="person1"
                width="200px"
                height="200px"
                layout="responsive"
              />
              <div className="info">
                <p>peter</p>
              </div>
              <div className="voice-rec">
                <VoiceRec />
              </div>
            </div>
            <div className="person">
              <Image
                src={'/assets/images/sam.png'}
                alt="person2"
                width="200px"
                height="200px"
                layout="responsive"
              />
              <div className="info">
                <p>Sam</p>
              </div>
            </div>
          </Wrapper>
        </Interactive>
      </Grid>
    </Container>
  );
};

export default Connect;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 40px;
  align-items: center;
  justify-items: center;

  .person {
    position: relative;
    width: 150px;
    height: 150px;

    .info {
      width: 100%;
      height: 100%;
      left: 15px;
      top: 75%;
      position: absolute;

      p {
        background: #1b1b1a;
        box-shadow: 0px 2px 8px rgba(27, 27, 26, 0.02),
          0px 2px 8px rgba(27, 27, 26, 0.04);
        border-radius: 8px;
        width: 48px;
        height: 26px;
        color: #fff;

        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        text-align: center;
      }
    }

    .voice-rec {
      background: #31cc4b;
      box-shadow: 0px 2px 8px rgba(27, 27, 26, 0.02),
        0px 2px 8px rgba(27, 27, 26, 0.04);
      border-radius: 8px;
      width: 26px;
      height: 26px;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    height: 100%;

    .person {
      width: 200px;
      height: 200px;
    }
  }
`;

const VoiceRec = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.5V17.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 9.5V14.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 11V13"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 14.5V9.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 13V11"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
