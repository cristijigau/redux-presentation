import { useState } from 'react';
import './App.css';
import DisplayState from './components/DisplayState';
import SecondView from './components/SecondView';

function App() {
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  const onChangeState = () => setUserIsAdmin((prev) => !prev);

  return (
    <div className='root flex'>
      <h2>Redux Introduction</h2>
      <button onClick={onChangeState}>Click here to change state</button>
      <DisplayState props={{ userIsAdmin }} />

      <div className='divider' />

      <div style={{ display: 'flex' }}>
        <SecondView props={{ userIsAdmin }} />
      </div>
    </div>
  );
}

export default App;
