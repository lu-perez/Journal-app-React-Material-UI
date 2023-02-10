import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import AppTheme from './theme/AppTheme'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.css'

function App () {
  return (
    <Provider store={store}>
      <AppTheme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppTheme>
    </Provider>
  )
}

export default App
