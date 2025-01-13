import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import React from 'react'
import Navbar from './Mycomponent/Navbar';
import Home from './Page/Home';




const App = () => {


  const queryClient = new QueryClient()

  

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Navbar />
        <Home />
      </>
    </QueryClientProvider>
  )

}


export default App;