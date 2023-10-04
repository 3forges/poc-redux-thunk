import React from 'react'
import { render } from 'react-dom'
/**
 * We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
 * 
 * Redux Toolkit is our recommended approach for writing Redux logic today, including store setup, reducers, data fetching, and more.
 */
import { /*configureStore,*/ createStore  } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)
// const store = configureStore(reducer)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
