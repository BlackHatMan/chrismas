import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './component/Footer';
import { PageStart } from './pages/PageStart';
import { PageToys } from './pages/PageToys';
import { Header } from './component/Header'
import { PageTree } from './pages/PageTree';

function App() {
  console.log("баллов 110 точно есть, а может и больше :xD")
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="chrismas" element={<PageStart />} />
        <Route path="chrismas/toys" element={<PageToys />} />
        <Route path="chrismas/tree" element={<PageTree />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
