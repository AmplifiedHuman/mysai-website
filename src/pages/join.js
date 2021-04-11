import React from 'react';
import JoinCard from '../components/JoinCard';

import Layout from '../components/Layout';
import Seo from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <JoinCard />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
