import Link from 'next/link';
import React from 'react';
import MenuItem from './MenuItem';
import { motion } from 'framer-motion';

const Navigation = ({
  hoveredItem,
  setHoveredItem,
}: {
  hoveredItem: string | null;
  setHoveredItem: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const SubItemVariants = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <nav>
      {menuList.map((list) => (
        <React.Fragment key={`nav-${list.name}`}>
          <MenuItem
            navName={list.name}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
            issublistanarray={Array.isArray(list.subMenu)}
            link={list.link}
          >
            {list.subMenu &&
              list.subMenu.map((sm) => (
                <React.Fragment key={`sub-menu-${sm.name}`}>
                  <Link href={sm.link} passHref>
                    <motion.a
                      variants={SubItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <span>{sm.name}</span>
                    </motion.a>
                  </Link>
                </React.Fragment>
              ))}
          </MenuItem>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Navigation;

const menuList = [
  {
    name: 'Products',
    subMenu: [
      {
        name: 'Product 1',
        link: '/product/Product-1',
      },
      {
        name: 'Product 2',
        link: '/product/Product-1',
      },
    ],
  },
  {
    name: 'Pricing',
    link: '/pricing',
  },
  {
    name: 'Customers',
    link: '/customers',
  },
  {
    name: 'Learn',
    subMenu: [
      {
        name: 'Typescript',
        link: '/learn/typescript',
      },
      {
        name: 'Graphql',
        link: '/learn/graphql',
      },
    ],
  },
];
