import React, {useState} from 'react';
import logo from '../src/success.png';
import './App.css';
import { keyGen } from './features/refThunk';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Loading() {
  
  
 
  return (
    <>
      <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='font-extrabold text-4xl text-yellow '><i> LOADING... </i></p>
      </header>
    </div>
    </>
  
  );
}

export default Loading;
