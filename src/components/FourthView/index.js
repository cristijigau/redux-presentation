import DisplayState from '../DisplayState';

function FourthView({ props }) {
  return (
    <div className='flex'>
      <h3>Fourth View</h3>
      <DisplayState props={{ props }} />
      <div className='divider' />
      <div style={{ display: 'flex' }}>
        {props.userIsAdmin ? <div>Secret Data!</div> : <div>You have no acces here!</div>}
      </div>
    </div>
  );
}

export default FourthView;
