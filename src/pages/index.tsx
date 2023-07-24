import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Welcome to Massa`}
      description="Welcome! Here you'll learn everything you need to know about Massa.">
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
