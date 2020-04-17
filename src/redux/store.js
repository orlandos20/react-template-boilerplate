import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './index';
import logger from 'redux-logger';

export const history = createBrowserHistory()

export default function configureStore() {

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      logger
    ),
  );

  const store = createStore(
    createRootReducer(history),
    enhancer
  )

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./index', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store
}
