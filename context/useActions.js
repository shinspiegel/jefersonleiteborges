import { useContext } from 'react';
import { AppContext } from './context';
import { reducerCases as redux } from './reducer';

export const getAction = () => {
  const { state, dispatch } = useContext(AppContext);

  /**
   * This function will update the posts in the state
   * @param {object[]} payload This is the dev.to payload array
   */
  const updatePosts = (payload) => {
    dispatch({ type: redux.setPosts, payload });
    return;
  };

  return {
    state,
    updatePosts,
  };
};

/**
 * This function will return the state
 * @returns {import('./initialState').State}
 */
export const getState = () => {
  const { state } = useContext(AppContext);
  return state;
};
