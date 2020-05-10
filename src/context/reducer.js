export const reducerCases = {
  test: 'TEST',
  setPosts: 'SET_POSTS',
};

const Reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.test:
      console.log('reducer test');
      return state;

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
