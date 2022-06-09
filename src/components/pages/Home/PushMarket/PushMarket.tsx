import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'src/styles/Button';
import { Colors } from 'src/styles/Color';
import { Container } from 'src/styles/Common_Style';
import styled from 'styled-components';

const PushMarket = () => {
  return (
    <Container>
      <Wrapper>
        <h6 aria-hidden>
          Get <br /> started
        </h6>
        <div className="main-content">
          <h1>Start your free Homerun trial today</h1>
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
          <Button bg={Colors.btn_secondary_bg}>Get started — It’s free!</Button>
        </div>
      </Wrapper>
    </Container>
  );
};

export default PushMarket;

const Wrapper = styled.div`
  background: #7348ff;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  margin: 90px 0;
  padding: 30px;

  h6 {
    position: absolute;
    font-family: 'Manrope';
    font-weight: 800;
    font-size: 150px; //168px;
    line-height: 90px; //128px;;
    color: #ffffff;
    opacity: 0.08;
    left: -28px;
    top: -10px;
  }

  .main-content {
    position: relative;
    z-index: 10;
    height: 100%;
    h1 {
      font-family: 'Manrope';
      font-weight: 800;
      font-size: clamp(1.5em, 6vw, 2em);
      line-height: 30px;
      color: #ffffff;
      margin-bottom: 20px;
    }

    & > div {
      margin-bottom: 30px;
    }

    p {
      color: #ffffff;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 10px;
      span {
        margin-right: 10px;
      }
    }
  }

  @media (min-width: 992px) {
    height: 240px;

    h6 {
      position: absolute;
      font-family: 'Manrope';
      font-weight: 800;
      font-size: 168px;
      line-height: 128px;
      color: #ffffff;
      opacity: 0.08;
      left: -28px;
      bottom: -21px;
    }
    .main-content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        width: 100%;
        max-width: 350px;
        line-height: 48px;
      }

      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;

        p {
          margin: 0;
          margin-right: 16px;
        }
      }
    }
  }
`;
