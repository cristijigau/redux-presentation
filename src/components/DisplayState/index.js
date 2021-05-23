import './styles.css';

function DisplayState({ props }) {
  return <div className='display-state-root'>{JSON.stringify(props)}</div>;
}

export default DisplayState;
