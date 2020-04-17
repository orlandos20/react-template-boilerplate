import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import Layout from './src/components/Layout';
import Notifications from './globalNotifications';
import routes from './routes';


function App({history}) {
  return (
    <ConnectedRouter history={history}>
      <Notifications></Notifications>
      <Layout>
        { routes }
      </Layout>
    </ConnectedRouter>
  );
}

export default App;
