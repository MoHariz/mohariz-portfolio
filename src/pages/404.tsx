import * as React from 'react';
import { HeadFC, Link } from 'gatsby';
import PageWrapper from '@components/PageWrapper';
import Typography from '@components/Typography';
import Seo from '@components/Seo';

const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4
};

const NotFoundPage: React.FC = () => {
  return (
    <PageWrapper hideFooter>
      <div className='flex flex-col items-center justify-center' style={{ minHeight: '100svh' }}>
        <div>
          <Typography variant='h1' bold>
            Page not found
          </Typography>
          <Typography>
            Sorry 😔, we couldn’t find what you were looking for.
            <br />
            {process.env.NODE_ENV === 'development' ? (
              <>
                <br />
                Try creating a page in <code style={codeStyles}>src/pages/</code>.
                <br />
              </>
            ) : null}
            <br />
            <Link className='font-bold' to='/'>
              &#8592; GO HOME
            </Link>
          </Typography>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NotFoundPage;

export const Head: HeadFC = ({ location }) => {
  return <Seo title='Page Not Found' pathname={location.pathname} noindex />;
};
