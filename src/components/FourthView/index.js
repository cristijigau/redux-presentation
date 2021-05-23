import { useSelector } from 'react-redux';
import DisplayState from '../DisplayState';

function FourthView() {
  const userIsAdmin = useSelector((state) => state.app.userIsAdmin);

  return (
    <div className='flex'>
      <h3>Fourth View</h3>
      <DisplayState />
      <div className='divider' />
      <div style={{ display: 'flex' }}>
        {userIsAdmin ? <div>Secret Data!</div> : <div>You have no acces here!</div>}
      </div>
    </div>
  );
}

export default FourthView;
