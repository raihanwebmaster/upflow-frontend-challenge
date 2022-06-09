import Image from 'next/image';
import React from 'react';
import { Para } from 'src/styles/Common_Style';
import styled from 'styled-components';

const JobEditor = () => {
  return (
    <Wrapper>
      <div className="img">
        <Image
          src="/assets/images/Head-of-sales.png"
          alt="Head of sales"
          layout="fill"
        />
      </div>
      <div className="content">
        <h1>Job Editor</h1>
        <Para>
          Our easy-to-use editor allows you to create customized job ads within
          minutes.
        </Para>
      </div>
    </Wrapper>
  );
};

export default JobEditor;

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12), 0px 0px 0px 1px rgba(27, 27, 26, 0.12);
  border-radius: 12px;
  padding: 30px 15px;
  position: relative;
  height: 100%;
  width: 100%;

  .img {
    margin-top: 40px;
    width: 100%;
    position: absolute;
    height: 40px;
  }

  .content {
    margin-top: 130px;

    h1 {
      font-weight: 800;
      font-size: 20px;
      line-height: 30px;
      font-family: 'Manrope';
      margin-bottom: 15px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      opacity: 0.8;
    }
  }

  @media (min-width: 992px) {
    /* .img {
      position: relative;
    } */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
`;
