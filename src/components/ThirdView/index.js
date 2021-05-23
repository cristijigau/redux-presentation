import DisplayState from '../DisplayState';
import FourthView from '../FourthView';

function ThirdView() {
  return (
    <div className='flex'>
      <h3>Third View</h3>
      <DisplayState />
      <div className='divider' />
      <div style={{ display: 'flex' }}>
        <FourthView />
      </div>
    </div>
  );
}

export default ThirdView;
