import { useContext } from 'react';
import AppContext from './context';
import { reducerCases as redux } from './reducer';

const actions = () => {
  const { state, dispatch } = useContext(AppContext);

  const consoleTest = (payload) => {
    console.log('actions test');
    dispatch({ type: redux.test, payload });
    return;
  };

  const updatePosts = (payload) => {
    dispatch({ type: redux.setPosts, payload });
    return;
  };

  return {
    state,
    consoleTest,
    updatePosts,
  };
};

export default actions;
