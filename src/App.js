import React, {useState} from 'react';
import logo from './logo.png';
import './App.css';
import { keyGen } from './features/refThunk';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Result from './result';
import Loading from './Loading';
function App() {
  const [email, setEmail]= useState("")
  const [showModal, setShowModal] = React.useState(false);

  const dispatch = useDispatch();
  const { loading, message, refData,generated } = useSelector((state) => state.ref);


  const  handleGenerate = (e) => {
    e.preventDefault();
     dispatch(keyGen({email}));   
  }
  return !loading? (!generated?  (
    <>
          <ToastContainer />

 





      <div className="App">

      <header className="App-header">
      <p className='text-md text-yellow font-bold '>
         @alxzndrcodes 
        </p>
        <p className='font-extrabold text-4xl '><i>REFERRAL KEY GENERATOR</i></p>
        <img src={logo} className="App-logo" alt="logo" />
        <input placeholder='Enter your email address'
         className='text-sm text-purple py-2 px-20 rounded-md'
         name="email"
         onChange={(e) => setEmail(e.target.value)}

         />
          <p className='text-sm'>ensure you provide a valid email address</p>
        <button
          className="bg-yellow rounded-lg text-base py-2 px-20 font-extrabold text-purple mt-10"
          onClick={handleGenerate}
        >
          <i>GENERATE</i>
        </button>
      </header>
    </div>
    <>
   
    </>
    </>
  
  ):( <Result/>)):(<Loading/>)
}

export default App;
