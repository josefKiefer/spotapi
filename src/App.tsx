import { useDispatch } from 'react-redux';
import { authorizeAsync, getToken } from './slices/authSlice';

export default function App() {
  const dispatch = useDispatch(); 

  if (window.location.href.includes('code')) {
    dispatch(getToken());
  }

  return (
    <div>
      {window.location.href.includes('code') ? <h1>authorized!</h1> :
      <div>
          <button
            onClick={() => dispatch(authorizeAsync())}
          >
            Authorize
          </button>
      </div>
    }   
    </div>
  );
}
