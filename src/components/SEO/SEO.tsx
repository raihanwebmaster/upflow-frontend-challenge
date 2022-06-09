import Head from 'next/head';
import React from 'react';

interface SEO_Props {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEO_Props> = ({ title, description }) => {
  return (
    <Head>
      <title>
        {title} {title ? '|' : ''} UpFlow
      </title>
      <meta
        name="description"
        content={description || `Upflow Frontend Challenge`}
      />
    </Head>
  );
};

export default SEO;
