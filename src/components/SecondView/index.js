import DisplayState from '../DisplayState';
import ThirdView from '../ThirdView';

function SecondView() {
  return (
    <div className='flex'>
      <h3>Second View</h3>
      <DisplayState />
      <div className='divider' />
      <div style={{ display: 'flex' }}>
        <ThirdView />
      </div>
    </div>
  );
}

export default SecondView;
