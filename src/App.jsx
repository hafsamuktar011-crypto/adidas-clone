

import './App.css'
import Home from './components/pages/Home'
import { ShoeProvider } from './context/Shoecontext'
function App() {

  return (
    <ShoeProvider>
    <Home/>

    </ShoeProvider>
    
  )
}

export default App
