import * as React from 'react';

type ExternalLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href?: string | null;
};

/**
 * Link to a page outside this site. Opens in a new tab.
 * Gatsby's <Link> is only for internal routes, so use this for every external URL.
 * If href is empty (e.g. a missing env var), the children render without a link.
 */
const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, ...rest }) => {
  if (!href) {
    return <span className={rest.className}>{children}</span>;
  }

  return (
    <a href={href} target='_blank' rel='noopener noreferrer' {...rest}>
      {children}
    </a>
  );
};

export default ExternalLink;
