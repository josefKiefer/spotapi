import React from 'react';
import { useDispatch } from 'react-redux';
import { authorizeAsync, getToken } from './slices/authSlice';
import LandingPage from './components/LandingPage';

export default function App() {
  const dispatch = useDispatch(); 

  if (window.location.href.includes('code')) {
    dispatch(getToken());
  }

  return (
    <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
      <div>
        {window.location.href.includes('code') ? <LandingPage /> :
        <div>
            <button
              onClick={() => dispatch(authorizeAsync())}
            >
              Authorize
            </button>
        </div>
      }   
      </div>
    </div>
  );
}
