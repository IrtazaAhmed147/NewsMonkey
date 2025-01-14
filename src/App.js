import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Mycomponent/Navbar';
import Home from './Page/Home';
import CategoryNews from './Page/CategoryNews';
import Footer from './Mycomponent/Footer';



const App = () => {


  const queryClient = new QueryClient()



  return (
    <QueryClientProvider client={queryClient}>

      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news/:newsCategory' element={<CategoryNews />} />
        </Routes>

        <Footer/> 
      </Router>

    </QueryClientProvider>
  )

}


export default App;