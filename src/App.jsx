import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'
import Search from './components/Search.jsx'
import Product from './components/Product.jsx'
import Next from './components/Next.jsx'
import Footer from './components/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Nav></Nav>
<Search></Search>
<Product></Product>
    <Next></Next>
    <Footer></Footer>
    
</>
  )
}

export default App
