import Image from 'next/image';
import React from 'react';
import { Para } from 'src/styles/Common_Style';
import styled from 'styled-components';
import { Wrapper } from './JobEditor';

const AcceptReject = () => {
  return (
    <Container>
      <div className="img">
        <Image
          src="/assets/images/accept-reject.png"
          alt="Accept & Reject"
          layout="fill"
        />
      </div>
      <div className="content">
        <h1>Accept & Reject</h1>
        <Para>
          Automate tasks and save time. With one click you can accept or reject
          candidates.
        </Para>
      </div>
    </Container>
  );
};

export default AcceptReject;

const Container = styled(Wrapper)`
  background: #ffb423;
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12), 0px 0px 0px 1px #ffb423;

  .img {
    width: 90%;
    height: 135px;
    margin: 0;
    margin-bottom: 20px;
  }

  .content {
    margin-top: 150px;
    color: #ffffff;

    p {
      color: #ffffff;
    }
  }

  @media (min-width: 992px) {
    height: 450px;

    .content {
      margin-top: 270px;
    }
  }
`;
