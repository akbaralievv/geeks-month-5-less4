import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reduser from './redux/reduser/reduser'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store=createStore(reduser)
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <App />
</Provider>

)
