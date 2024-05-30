import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <>
            <Routes>
                <Route path='/auth' element={<Auth />} />
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App