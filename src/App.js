import React, { Suspense } from 'react';
import './App.css';
import Home from './layouts/home';
import logo from './logo.svg'

function App() {
  const Loader = () => {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>loading...</div>
      </div>
    )
  }

  return (
    <Suspense fallback={<Loader />}>
      <Home/>
    </Suspense>
  )
}

export default App;
