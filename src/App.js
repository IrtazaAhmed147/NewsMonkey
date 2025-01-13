import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import React from 'react'
import Navbar from './Mycomponent/Navbar';




const App = () => {


  const queryClient = new QueryClient()

  

  return (
    <QueryClientProvider client={queryClient}>

      <>
        <Navbar />
      </>
    </QueryClientProvider>
  )

}


export default App;