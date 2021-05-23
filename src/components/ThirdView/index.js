import { useSelector } from 'react-redux';
import DisplayState from '../DisplayState';
import FourthView from '../FourthView';

function ThirdView() {
  const data = useSelector((state) => state.app.data);

  return (
    <div className='flex'>
      <h3>Third View</h3>
      {data ? data.title : 'no data'}

      <DisplayState />
      <div className='divider' />
      <div style={{ display: 'flex' }}>
        <FourthView />
      </div>
    </div>
  );
}

export default ThirdView;
