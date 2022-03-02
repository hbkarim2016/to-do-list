import Add from './components/Add';
import List_ from './components/List_';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { loading } from './redux/reducers/ReducerSlice';
import { useEffect } from 'react';
function App() {
  const {loadingState} = useSelector( state => state.doList );
  const dispatch = useDispatch();
  const loadingDispatch = () =>{
    dispatch(loading())
  }
  useEffect(()=>{
    setTimeout(()=>{
      loadingDispatch()
    },2500)
  },[]);
  return (
    <>
      { loadingState === 1 ? 
      <div className='page-loading'>
        <div className="logo">
            <span>D</span>
            <FontAwesomeIcon className="check-logo" icon={faCheckCircle} />
        </div>
      </div>
      :
      <div className="container">
        <div className='to_do_list'>
          <Add />
          <List_ />
        </div>
      </div>
      }
    </>
  );
}

export default App;
