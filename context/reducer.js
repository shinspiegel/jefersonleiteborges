export const reducerCases = {
  setPosts: 'SET_POSTS',
};

/**
 * This is the reducer function
 * @param {import("./initialState").State} state
 * @param {*} action
 */
const Reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.setPosts:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
