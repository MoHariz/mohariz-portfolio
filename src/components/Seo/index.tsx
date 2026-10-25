import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

type SeoProps = {
  /** Page-specific title. Rendered as "<title> | <site title>"; omit on the home page. */
  title?: string;
  description?: string;
  /** Path of the current page, e.g. location.pathname from the Head props. */
  pathname?: string;
  /** Absolute URL or site-relative path to a 1200x630 preview image. */
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  children?: React.ReactNode;
};

type SiteMetadata = {
  title: string;
  description: string;
  siteUrl: string;
  image: string;
};

const toAbsoluteUrl = (siteUrl: string, pathOrUrl: string) =>
  /^https?:\/\//.test(pathOrUrl)
    ? pathOrUrl
    : `${siteUrl}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;

/**
 * Shared <head> tags for every page: title, description, canonical URL,
 * Open Graph and Twitter preview cards. Use it from each page's `Head` export.
 */
const Seo: React.FC<SeoProps> = ({
  title,
  description,
  pathname = '/',
  image,
  imageAlt,
  type = 'website',
  noindex,
  children
}) => {
  const { site } = useStaticQuery<{ site: { siteMetadata: SiteMetadata } }>(graphql`
    query SeoSiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `);
  const meta = site.siteMetadata;

  const fullTitle = title ? `${title} | ${meta.title}` : meta.title;
  const metaDescription = (description || meta.description).trim();
  const url = toAbsoluteUrl(meta.siteUrl, pathname);
  const imageUrl = toAbsoluteUrl(meta.siteUrl, image || meta.image);
  const imageDescription = imageAlt || fullTitle;

  return (
    <>
      <html lang='en' />
      <title>{fullTitle}</title>
      <meta name='description' content={metaDescription} />
      <link rel='canonical' href={url} />
      {noindex && <meta name='robots' content='noindex' />}

      <meta property='og:type' content={type} />
      <meta property='og:site_name' content={meta.title} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={imageDescription} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={imageUrl} />
      <meta name='twitter:image:alt' content={imageDescription} />
      {children}
    </>
  );
};

export default Seo;
