import React, {useState} from 'react';
import logo from '../src/success.png';
import './App.css';
import { keyGen } from './features/refThunk';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Result() {
  
  const dispatch = useDispatch();
  const { loading, message, refData} = useSelector((state) => state.ref);


 
  return (
    <>
      <div className="App">

      <header className="App-header">
      <p className='text-md text-yellow font-bold '>
         @alxzndrcodes 
        </p>
        <p className='font-extrabold text-4xl text-yellow '><i> YOUR REFERRAL KEY </i></p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-sm'>for <span className='font-bold text-yellow'> {refData.email}</span></p>
          <p className='font-extrabold text-4xl '><i> YOUR REFERRAL KEY IS <span className='text-yellow'>{refData.ref_key}</span> </i></p>
          <p className='text-sm'>ensure you screenshot, copy, anything at all. but don't loose this key</p>
          <p className='text-sm font-bold text-yellow'>NOTE: the referral key is CaSE sensitive</p>


      </header>
    </div>
    </>
  
  );
}

export default Result;
