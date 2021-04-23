import { useDispatch, useSelector } from 'react-redux';
import { getToken, selectToken } from '../slices/authSlice';
import { getTopTracks, selectTracks } from '../slices/tracksSlice';

export default function LandingPage() {
  const tracks = useSelector(selectTracks);
  const token = useSelector(selectToken);
  const dispatch = useDispatch(); 

  if (window.location.href.includes('code')) {
    dispatch(getToken());
  }

  return (
    <div>
      <button
        onClick={() => dispatch(getTopTracks(token))}
      >
        Get top tracks
      </button>
      {tracks ? tracks.map(track => (
      <div key={track.name}>{track.name}</div>
    )) : <></>}
    </div>
  );
}
