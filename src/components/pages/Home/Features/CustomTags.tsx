import Image from 'next/image';
import React from 'react';
import { Para } from 'src/styles/Common_Style';
import styled from 'styled-components';
import { Wrapper } from './JobEditor';

const CustomTags = () => {
  return (
    <Container>
      <div className="img">
        <Image src="/assets/images/tags.png" alt="custom tags" layout="fill" />
      </div>
      <div className="content">
        <h1>Create Custom Tags</h1>
        <Para>
          Tags help you organize and structure candidates more efficiently.
        </Para>
      </div>
    </Container>
  );
};

export default CustomTags;

const Container = styled(Wrapper)`
  background: #33d1ea;
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12), 0px 0px 0px 1px #33d1ea;

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

  @media (min-width: 992px) {
    .img {
      width: 100%;
      margin-top: 140px;
      height: 250px;
    }

    .content {
      margin-top: 640px;
    }
  }
`;
