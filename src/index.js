import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux-flow/configure-store' 
import * as serviceWorker from './serviceWorker';
import { db } from './config/firebase'


const store = configureStore()

const videos = db.ref('videos')
const setVideo = videos.push() //para usar o metodo set do firebase deve-se da um push para inicir nova propriedade no db
const anyVideo = videos.child(345)



videos.on('value', (snapshot) => {
  console.log('snapshot', snapshot.val())
}, (error) => {
  console.log('error:', error)
})

anyVideo.update({         //metodo nao destrutivo
  id: "002",
  title: "ｈｅｙ　ｙo"
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
