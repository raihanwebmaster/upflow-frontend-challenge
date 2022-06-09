import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'src/hooks/useMediaQuery';
import MenuIcon from './MenuIcon';
import Navigation from './Navigation';
import { useWindowSize } from 'src/hooks/useWindowSize';
import { Container } from 'src/styles/Common_Style';
import { Button } from 'src/styles/Button';
import { Colors } from 'src/styles/Color';

const Header = () => {
  const router = useRouter();
  const [menuBtn, setMenuBtn] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const HeaderRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const isMediumDevice = useMediaQuery('(min-width: 992px)');
  const { width } = useWindowSize();

  const mobileNaveMenu = {
    hidden: {
      top: '-100vh',
      opacity: 0,
    },
    visible: {
      top: 0,
      opacity: 1,
    },
  };

  const desktopNaveMenu = {
    visible: {
      top: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    setMenuBtn(false);
  }, [router]);

  return (
    <HeaderC ref={HeaderRef}>
      <Container as="div">
        <Grid as={motion.div} onHoverEnd={() => setHoveredItem(null)}>
          <div className="logo grid-item">
            <Link href={'/'}>
              <a>
                <Image
                  src={'/assets/images/logo.png'}
                  width="123px"
                  height="26px"
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <motion.div
            className="grid-item nav-menu"
            layout={width && width < 992 ? true : false}
            initial={isMediumDevice ? 'visible' : 'hidden'}
            animate={
              isMediumDevice ? 'visible' : menuBtn ? 'visible' : 'hidden'
            }
            variants={isMediumDevice ? desktopNaveMenu : mobileNaveMenu}
          >
            <Navigation
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
            />

            <div className="btn-container">
              <a
                href={`${process.env.LEO_APP_URL}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Log in</Button>
              </a>
              <a
                href={`${process.env.LEO_APP_URL}/signup_pro`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button bg={Colors.btn_primary_bg}>
                  <span>Start 14-day trial</span>
                </Button>
              </a>
            </div>
          </motion.div>

          <div
            className="grid-item menu-icon"
            onClick={() => setMenuBtn(!menuBtn)}
          >
            <MenuIcon menuBtn={menuBtn} />
          </div>
        </Grid>
      </Container>
    </HeaderC>
  );
};

export default Header;

const HeaderC = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  background-color: #fff;
  height: 80px;

  /* .container {
    height: auto;
    width: 100%;
    position: relative;
  } */

  @media (min-width: 992px) {
    /* padding-top: 10px; */
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  /* position: relative; */
  align-items: center;
  margin-top: 15px;

  .logo {
    width: 80px;
    position: realtive;
    z-index: 21;
  }

  .menu-icon {
    z-index: 21;

    svg {
      width: 40px;
    }
  }

  .nav-menu {
    align-self: start;
    margin-top: 0px;
    position: absolute;
    z-index: 999;
    background: #fff;
    height: auto;
    width: 100%;
    /* left: calc(-50vw + 50%); */
    z-index: 20;
    padding: 50px;
    padding-inline: 2em;
    top: 0;
    right: 0;

    grid-template-rows: auto 1fr;
    display: grid;
    grid-row-gap: 40px;

    button {
      width: 100%;
      height: 37.44px;
    }

    .menu-item {
      padding: 20px 0;
      border-bottom: 2px solid gray;

      &:first-child {
        margin-top: 20px;
      }

      svg {
        width: 10px;
        /* margin-right: 20px;   */
      }

      a {
        display: block;
        color: #1b1b1a;
        &:not(:first-child) {
          margin-top: 10px;
          margin-bottom: 15px;
        }
      }

      .menu-text-container {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .menu-text {
          color: #1b1b1a;
          font-size: 14px;
          line-height: 20px;
          font-family: 'Inter', sans-serif;
        }
      }
    }
  }

  @media (min-width: 400px) {
    .nav-menu {
      height: 100vh;
      .menu-item {
        /* height: 100px; */
        padding: 40px 0;
      }
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: 100px auto;
    .logo {
      width: 100px;
    }

    .menu-icon {
      display: none;
    }

    .nav-menu {
      font-weight: 700;
      position: relative;
      margin: 0;
      padding: 0;
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      grid-gap: 0;
      height: 100%;

      .btn-container {
        display: flex;

        margin-top: 5px;
        button {
          border-radius: 10px;
          margin-top: 0;
          width: 110px;
          height: 40px;
        }

        & > :last-child {
          button {
            width: 170.5px;
            height: 40px;
          }
        }
      }

      nav {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .menu-item {
        border-bottom: none;
        position: relative;
        padding: 0;
        &:not(:last-child) {
          margin-right: 18px;
        }
        &:first-child {
          margin-top: 0;
        }

        .menu-text-container {
          svg {
            display: block;
            margin-left: 5px;
          }
          .menu-text {
            position: relative;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .nav-menu {
      .menu-item {
        border-bottom: none;
        position: relative;
        padding: 0;
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
`;
