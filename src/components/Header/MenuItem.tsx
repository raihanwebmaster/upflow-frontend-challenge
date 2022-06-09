import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const MenuItem = ({
  navName,
  hoveredItem,
  setHoveredItem,
  children,
  issublistanarray,
  link,
}: {
  navName: string;
  hoveredItem: null | string;
  setHoveredItem: React.Dispatch<React.SetStateAction<string | null>>;
  children: React.ReactNode;
  issublistanarray: boolean;
  link: string | undefined;
}) => {
  const MenuItemVariants = {
    hidden: {
      opacity: 0,
      x: '-5px',
    },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <>
      {' '}
      <motion.div
        className="menu-item"
        onHoverStart={() => setHoveredItem(navName)}
        variants={MenuItemVariants}
        initial="hidden"
        animate="visible"
        onClick={() => setHoveredItem(hoveredItem ? null : navName)}
      >
        {children ? (
          <div className="menu-text-container">
            <span className="menu-text">{navName}</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        ) : (
          link && (
            <Link href={link}>
              <a>
                <div className="menu-text-container">
                  <span className="menu-text">{navName}</span>
                </div>
              </a>
            </Link>
          )
        )}

        {hoveredItem === navName && children && (
          // @ts-ignore
          <SubMenuContainer
            issublistanarray={issublistanarray.toString()}
            onHoverEnd={() => setHoveredItem(null)}
            as={motion.div}
            layoutId="sub-menu"
          >
            <div className="wrapper">{children}</div>
          </SubMenuContainer>
        )}
      </motion.div>
    </>
  );
};

export default MenuItem;

const SubMenuContainer = styled.div`
  .wrapper {
    padding-left: 15px;
    border-left: 1px solid gray;
    margin-left: 5px;
    margin-top: 10px;
  }

  div {
    .sub-menu-heading {
      display: none;
      font-family: 'Inter', sans-serif;
    }

    a {
      display: block;
      font-weight: 400;
      font-size: 16.3508px;
      line-height: 20px;
      color: #063149;
      font-family: 'Inter', sans-serif;

      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #aac9d6;
      }
    }
  }

  @media (min-width: 992px) {
    min-width: max-content;
    position: absolute;
    border: 2px solid #000;
    border-radius: 20px;
    left: -50%;
    top: 33px;
    background: #ffffff;
    box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
    /* gradent border */
    border: solid 2px transparent;
    border-radius: 20px;
    background-image: linear-gradient(white, white),
      linear-gradient(270deg, #0071bc 0%, #11cad6 104.71%);
    background-image: -webkit-linear-gradient(white, white),
      -webkit-linear-gradient(270deg, #0071bc 0%, #11cad6 104.71%);
    background-image: -moz-linear-gradient(white, white),
      -moz-linear-gradient(270deg, #0071bc 0%, #11cad6 104.71%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    z-index: 999;

    .wrapper {
      border-left: none;
      margin-left: 0;
      margin-top: 0;
      padding: 30px 40px;

      ${({ issublistanarray }: any) =>
        issublistanarray === 'false' &&
        css`
          display: grid;
          grid-template-columns: repeat(3, 200px);
          min-width: 400px;
        `}
    }

    ${({ issublistanarray }: any) =>
      issublistanarray === 'false' &&
      css`
        left: -285%;
      `}

    /* &:before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: red;
    } */

    div {
      .sub-menu-heading {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #aac9d6;
        margin-bottom: 20px;
        display: block;
      }

      a {
        &:hover span {
          background: linear-gradient(270deg, #0071bc 0%, #11cad6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }

        &:hover p {
          color: #063149;
        }
      }
    }

    .sub-menu-item {
      min-width: max-content;
    }
  }
`;
