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
        className='lg:px-40 md:px-20 sm:px-10 px-5'
        style={{
          ...pageStyles,
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
};

export default PageWrapper;
