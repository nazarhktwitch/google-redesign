import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100 bg-[linear-gradient(110deg,theme(colors.slate.950)_0%,theme(colors.indigo.950)_33%,theme(colors.purple.950)_66%,theme(colors.slate.950)_100%)] bg-[length:250%_auto] animate-[aurora_20s_ease_infinite]">
      <Header />
      <main className="flex-grow">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;