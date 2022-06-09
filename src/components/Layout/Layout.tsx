import React from 'react';
import Header from 'src/components/Header';
import styled from 'styled-components';
import Footer from 'src/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  margin-top: 80px;
`;
