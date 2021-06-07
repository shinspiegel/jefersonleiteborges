import { useContext } from 'react';
import { DispatchContext } from './index';
import { ActionTypes } from './reducer';

export const useActions = () => {
  const dispatch = useContext(DispatchContext);

  return {
    getPosts: async () => {
      const url = 'https://dev.to/api/articles?username=shinspiegel';
      const data = await fetch(url).then((res) => res.json());
      dispatch({ type: ActionTypes.setPosts, payload: data });
    },
    getStateFromStaticJson: async () => {
      const url = '/state.json';
      const data = await fetch(url).then((res) => res.json());

      if (data.basicInfo) {
        dispatch({ type: ActionTypes.setBasicInfo, payload: data.basicInfo });
      }

      if (data.socialMedia) {
        dispatch({
          type: ActionTypes.setSocialMedia,
          payload: data.socialMedia,
        });
      }

      if (data.workExperience) {
        dispatch({
          type: ActionTypes.setWorkExperience,
          payload: data.workExperience,
        });
      }

      if(data.education) {
        dispatch({
          type: ActionTypes.setEducation,
          payload: data.education
        })
      }
    },
  };
};

export default useActions;
