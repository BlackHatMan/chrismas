import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './component/Footer';
import { PageStart } from './pages/PageStart';
import { PageToys } from './pages/PageToys';
import { Header } from './component/Header'
import { PageTree } from './pages/PageTree';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PageStart />} />
        <Route path="toys" element={<PageToys />} />
        <Route path="tree" element={<PageTree />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
