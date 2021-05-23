import { useDispatch } from 'react-redux';
import './App.css';
import DisplayState from './components/DisplayState';
import SecondView from './components/SecondView';

function App() {
  const dispatch = useDispatch();
  const onChangeState = () => dispatch({ type: 'CHANGE_ADMIN_STATUS' });

  return (
    <div className='root flex'>
      <h2>Redux Introduction</h2>
      <button onClick={onChangeState}>Click here to change state</button>
      <DisplayState />

      <div className='divider' />

      <div style={{ display: 'flex' }}>
        <SecondView />
      </div>
    </div>
  );
}

export default App;
