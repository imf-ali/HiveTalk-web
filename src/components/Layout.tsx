import React from 'react';
import { Wrapper, WrapperVariant } from './Wrapper';
import NavBar from './NavBar';

interface LayoutProps {
  children: any;
  variant?: WrapperVariant;
}

const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <NavBar pageProps={undefined} />
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};

export default Layout;
