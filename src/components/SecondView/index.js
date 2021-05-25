import { useDispatch, useSelector } from 'react-redux';
import DisplayState from '../DisplayState';
import ThirdView from '../ThirdView';

function SecondView() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.app.counter);
  const onIncrement = () => dispatch({ type: 'INCREMENT' });
  const onIncrementAsync = () => dispatch({ type: 'INCREMENT_ASYNC' });

  return (
    <div className='flex'>
      <h3>Second View</h3>
      {counter}
      <button onClick={onIncrement}>INCREMENT</button>
      <button onClick={onIncrementAsync}>INCREMENT_ASYNC</button>
      <DisplayState />
      <div className='divider' />
      <div style={{ display: 'flex' }}>
        <ThirdView />
      </div>
    </div>
  );
}

export default SecondView;
