
import './App.css';
import { useDispatch } from "react-redux"
import { useEffect } from 'react';
import { GetOems } from './redux/actions/oem.actions';
import Login from './routes/Login';
import Allrouts from './routes/AllRoutes';

import Nav from './components/Nav';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetOems())
  }, [])
  return (
    <div className="App">
      <Nav />
      <Allrouts />

    </div>
  );
}

export default App;
