import Image from 'next/image';
import React from 'react';
import { Para } from 'src/styles/Common_Style';
import styled from 'styled-components';
import { Wrapper } from './JobEditor';

const Collaboration = () => {
  return (
    <Container>
      <div className="img">
        <Image
          src="/assets/images/Collaboration.png"
          alt="Collaboration"
          layout="fill"
        />
      </div>
      <div className="content">
        <h1>Team Collaboration and Communication</h1>
        <Para>
          Exchange ideas and progress with team members to make the right
          decisions together.
        </Para>
      </div>
    </Container>
  );
};

export default Collaboration;

const Container = styled(Wrapper)`
  background: #179690;
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12), 0px 0px 0px 1px #179690;
  padding: 30px 0;

  .img {
    width: 100%;
    height: 155px;
    margin: 0;
    margin-bottom: 20px;
  }

  .content {
    padding: 0 15px;
    margin-top: 180px;
    color: #ffffff;

    p {
      color: #ffffff;
    }
  }
  @media (min-width: 992px) {
    .img {
      height: 450px;
    }
    .content {
      margin-top: 550px;
    }
  }
`;
