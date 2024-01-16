import * as React from 'react';
import { PageProps } from 'gatsby';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

type PageWrapperProps = {
  headComponent?: React.ReactElement;
  pageStyles?: React.CSSProperties;
} & PageProps;

const PageWrapper: React.FC<PageWrapperProps> = ({ children, headComponent, pageStyles }) => {
  return (
    <>
      {headComponent}
      <NavBar />
      <main
        style={{
          ...pageStyles,
        }}
      >{children}</main>
      <Footer />
    </>
  );
};

export default PageWrapper;
