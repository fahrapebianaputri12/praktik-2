import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Fahra";
  const greeting = <h2>Hello, {name}!</h2>;

  return (
    <div>
      <h1>Basic JSX Practice</h1>
      {greeting}
    </div>
  );
}

export default App;
