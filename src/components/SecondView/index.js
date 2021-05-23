import DisplayState from '../DisplayState';
import ThirdView from '../ThirdView';

function SecondView({ props }) {
  return (
    <div className='flex'>
      <h3>Second View</h3>
      <DisplayState props={{ props }} />
      <div className='divider' />
      <div style={{ display: 'flex' }}>
        <ThirdView props={props} />
      </div>
    </div>
  );
}

export default SecondView;
