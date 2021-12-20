import React from 'react';
import './App.css'; 
import { Footer } from './component/Footer';
/* import { PageStart } from './pages/PageStart'; */
import { PageToys } from './pages/PageToys';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/*   <PageStart/>  */}
      <PageToys />
     <Footer/>
    </div>
  );
}

export default App;
