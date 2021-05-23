import './styles.css';

function DisplayState({ props }) {
  return <div className='display-state-root'>{props ? JSON.stringify(props) : 'no props'}</div>;
}

export default DisplayState;
