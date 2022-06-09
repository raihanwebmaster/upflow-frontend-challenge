import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './JobEditor';
import { Para } from 'src/styles/Common_Style';

const Branding = () => {
  return (
    <Container>
      <div className="img">
        <Image src="/assets/images/branding.png" alt="Branding" layout="fill" />
      </div>
      <div className="content">
        <h1>Boost Your Employer Branding</h1>
        <Para>
          Stand out with your branded careers site - including your company’s
          own custom URL.
        </Para>
      </div>
    </Container>
  );
};

export default Branding;

const Container = styled(Wrapper)`
  background: #ff2e57;
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12), 0px 0px 0px 1px #ff2e57;

  .img {
    width: 90%;
    height: 155px;
    margin: 0;
    margin-bottom: 20px;
  }

  .content {
    margin-top: 180px;
    color: #ffffff;

    p {
      color: #ffffff;
    }
  }

  /* @media (min-width: 992px) {
    height: 384px;
  } */
`;
