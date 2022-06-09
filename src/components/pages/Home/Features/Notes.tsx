import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './JobEditor';
import { Para } from 'src/styles/Common_Style';

const Notes = () => {
  return (
    <Container>
      <div className="img">
        <Image src="/assets/images/notes.png" alt="notes" layout="fill" />
      </div>
      <div className="content">
        <h1>Notes</h1>
        <Para>Collect your thoughts and share them with colleagues.</Para>
      </div>
    </Container>
  );
};

export default Notes;

const Container = styled(Wrapper)`
  .img {
    width: 90%;
    height: 155px;
    margin: 0;
    margin-bottom: 20px;
  }

  .content {
    margin-top: 180px;
  }

  /* @media (min-width: 992px) {
    height: 384px;
  } */
`;
