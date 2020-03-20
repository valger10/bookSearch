import React from 'react'

import './styles/main.scss'
import Header from './features/Header'
import SearchView from './views/SearchView'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <SearchView />
      </main>
    </div>
  )
}

export default App
