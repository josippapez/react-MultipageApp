import React from 'react';
import Navbar from './components/navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Post from './components/post';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path="/:post_id" component={Post}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
