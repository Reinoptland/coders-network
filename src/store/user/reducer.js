const initialState = {
  token: localStorage.getItem("token") || null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "USER_AUTHENTICATED":
      localStorage.setItem("token", action.payload);
      return { ...state, token: action.payload };

    case "PROFILE_FETCHED":
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
