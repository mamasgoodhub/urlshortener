import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LinksList from './components/LinksList';
import UrlInput from './components/UrlInput';

import {LinkProvider} from './context/LinkContext'

function App() {
  return (
    <>
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <h2 style={{textAlign: 'center', padding: '10px'}}>
            URL Shortener
          </h2>
          <UrlInput/>
          <LinkProvider>
            <LinksList/>
          </LinkProvider>
        </div> 
    </>
  );
}

export default App;
