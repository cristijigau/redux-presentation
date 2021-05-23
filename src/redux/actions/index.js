export function changeAdminStatus() {
  return {
    type: 'CHANGE_ADMIN_STATUS',
  };
}

export function getSomeData() {
  return (dispatch) => {
    console.log({ dispatch });
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'SET_DATA', data: res }));
  };
}
