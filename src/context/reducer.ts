import React, { Reducer } from 'react';
import { State } from './initialState';

export type dispatchAction = { type: ActionTypes; payload?: any };

export enum ActionTypes {
  setPosts = 'SET_POST',
  setBasicInfo = 'SET_BASIC_INFO',
  setSocialMedia = 'SET_SOCIAL_MEDIA',
  setWorkExperience = 'SET_WORK_EXPERIENCE',
  setEducation = 'SET_EDUCATION',
}

export const reducer: Reducer<State, dispatchAction> = (
  state: State,
  { payload, type },
) => {
  switch (type) {
    case ActionTypes.setPosts:
      return {
        ...state,
        posts: payload,
      };

    case ActionTypes.setBasicInfo:
      return {
        ...state,
        basicInfo: payload,
      };

    case ActionTypes.setSocialMedia:
      return {
        ...state,
        socialMedia: payload,
      };

    case ActionTypes.setWorkExperience:
      return {
        ...state,
        workExperience: payload,
      };

    case ActionTypes.setEducation:
      return {
        ...state,
        education: payload,
      };

    default:
      throw new Error(`Unknown action: ${type}`);
  }
};
