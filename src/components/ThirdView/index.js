import DisplayState from '../DisplayState';

function ThirdView({ props }) {
  return (
    <div className='flex'>
      <h3>Third View</h3>
      <DisplayState props={{ props }} />
    </div>
  );
}

export default ThirdView;
