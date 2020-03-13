const initialState = {
  token: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "USER_AUTHENTICATED":
      return { ...state, token: action.payload };

    default:
      return state;
  }
}
