import * as React from 'react';
import { PageProps } from 'gatsby';
import NavBar from '../NavBar';
import Footer from '../Footer/Footer';

type PageWrapperProps = {
  pageStyles?: React.CSSProperties;
  hideFooter?: boolean;
} & PageProps;

const PageWrapper: React.FC<PageWrapperProps> = ({ children, pageStyles, hideFooter }) => {
  return (
    <>
      <NavBar />
      <main
        className='lg:px-40 md:px-20 sm:px-10 px-5 py-4'
        style={{
          color: "#232129",
          fontFamily: "-apple-system, Roboto, sans-serif, serif",
          ...pageStyles,
        }}
      >{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
};

export default PageWrapper;
