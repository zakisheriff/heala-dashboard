import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GlassDashboard from './components/GlassDashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlassDashboard />
    </>
  )
}

export default App
