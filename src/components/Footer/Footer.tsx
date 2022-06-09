import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'src/styles/Button';
import { Colors } from 'src/styles/Color';
import { Container } from 'src/styles/Common_Style';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper as={'footer'}>
      <h5>What are you waiting for?</h5>
      <h1>Start your free Homerun trial today</h1>
      <Button bg={Colors.btn_primary_bg}>Get started — It’s free!</Button>

      <div>
        <p>
          <span>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          Totally free for 15 days
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          No credit card needed
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled(Container)`
  padding: 50px 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h5 {
    font-family: 'Manrope';
    font-weight: 800;
    font-size: 16px;
    line-height: 100%;
    color: ${Colors.btn_primary_color};
    margin-bottom: 15px;
  }

  h1 {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    width: 100%;
    max-width: 400px;
    margin-bottom: 15px;
  }

  & > div {
    /* margin-top: 20px; */
    p {
      color: #1b1b1a;
      opacity: 0.8;
      margin-top: 20px;
      span {
        margin-right: 10px;
      }
    }
  }

  @media (min-width: 992px) {
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        &:first-child {
          margin-right: 20px;
        }
      }
    }
  }
`;
