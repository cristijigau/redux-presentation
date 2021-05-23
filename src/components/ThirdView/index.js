import DisplayState from '../DisplayState';
import FourthView from '../FourthView';

function ThirdView({ props }) {
  return (
    <div className='flex'>
      <h3>Third View</h3>
      <DisplayState props={{ props }} />
      <div className='divider' />
      <div style={{ display: 'flex' }}>
        <FourthView props={props} />
      </div>
    </div>
  );
}

export default ThirdView;
