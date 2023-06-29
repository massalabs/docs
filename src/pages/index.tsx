import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Welcome to Massa`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
