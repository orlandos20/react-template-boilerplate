import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import Layout from './src/components/Layout';
import Notifications from './globalNotifications';

function App({history}) {
  return (
    <ConnectedRouter history={history}>
      <Notifications></Notifications>
      <Layout>
      </Layout>
    </ConnectedRouter>
  );
}

export default App;
