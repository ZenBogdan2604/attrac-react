import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { Layout } from './layout'
import { Home } from '../pages/home/Home.jsx'
import { Contact } from '../pages/contacts/Contact.jsx'
import Attraction from '../pages/attractions/Attraction.jsx';
 
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contacts' element={<Contact/>}/>
          <Route path='attractions' element={<Attraction />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
