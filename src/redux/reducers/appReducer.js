const initialState = {
  userIsAdmin: false,
  data: false,
  counter: 0,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_ADMIN_STATUS': {
      return { ...state, userIsAdmin: !state.userIsAdmin };
    }

    case 'INCREMENT': {
      return { ...state, counter: state.counter + 1 };
    }

    case 'SET_DATA': {
      return { ...state, data: action.data };
    }

    default:
      return state;
  }
}
