const initialState = {
  userIsAdmin: false,
  data: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_ADMIN_STATUS': {
      return { ...state, userIsAdmin: !state.userIsAdmin };
    }

    case 'SET_DATA': {
      return { ...state, data: action.data };
    }

    default:
      return state;
  }
}
