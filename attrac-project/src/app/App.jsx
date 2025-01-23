import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './Layout.jsx';
import { Home } from '../pages/home/Home.jsx';
import { Contact } from '../pages/contacts/Contact.jsx';
import Attraction from '../pages/attractions/Attraction.jsx';
import CardInfo from '../components/cardinfo/CardInfo.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="attractions" element={<Attraction />} />
          <Route path="card-info" element={<CardInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;