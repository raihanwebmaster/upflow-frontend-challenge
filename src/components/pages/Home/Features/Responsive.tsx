import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './JobEditor';
import { Para } from 'src/styles/Common_Style';

const Responsive = () => {
  return (
    <Container>
      <div className="img">
        <Image
          src="/assets/images/responsive.png"
          alt="responsive"
          layout="fill"
        />
      </div>
      <div className="content">
        <h1>Responsive</h1>
        <Para>Flexible ads without being a techie.</Para>
      </div>
    </Container>
  );
};

export default Responsive;

const Container = styled(Wrapper)`
  background: #7348ff;
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12), 0px 0px 0px 1px #7348ff;

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
