import React from 'react';
import { motion } from 'framer-motion';

const MenuIcon = ({ menuBtn }: { menuBtn: boolean }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 "
          initial={{ rotate: 0, translateY: 0 }}
          animate={{ rotate: menuBtn ? 45 : 0, translateY: menuBtn ? 6 : 0 }}
          transition={{ type: 'spring', stiffness: 560, damping: 20 }}
        />
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 12h16M4 "
          initial={{ opacity: 1 }}
          animate={{ opacity: menuBtn ? 0 : 1 }}
        />
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 18h16"
          initial={{ rotate: 0, translateY: 0 }}
          animate={{ rotate: menuBtn ? -45 : 0, translateY: menuBtn ? -6 : 0 }}
          transition={{ type: 'spring', stiffness: 560, damping: 20 }}
        />
      </svg>
    </>
  );
};

export default MenuIcon;
