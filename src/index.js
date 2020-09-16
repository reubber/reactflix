import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux-flow/configure-store' 
import * as serviceWorker from './serviceWorker';
import { db } from './config/firebase'


const store = configureStore()

const videos = db.ref('videos')

videos.on('value', (snapshot) => {
  console.log('snapshot', snapshot.val())
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
