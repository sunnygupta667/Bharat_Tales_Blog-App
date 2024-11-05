// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Blogs from './components/Blog';
import Contact from './components/Contact';
import BlogDetail from './components/BlogDetail';
import Home from './components/Home';
import About from './components/About'; // Adjust the path based on your folder structure

import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home Route */}
            <Route path="/Blog" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> {/* Contact Route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
