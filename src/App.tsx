import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  Navigate,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.scss'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App
