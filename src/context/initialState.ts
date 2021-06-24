import { useContext } from 'react';
import { StateContext } from './index';

export type Post = {
  id: number;
  title: string;
  description: string;
  slug: string;
  url: string;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  tag_list: string[];
};

export type BasicInfo = {
  greeting: string;
  name: string;
  city: string;
  about: string;
  description: string;
  heroImage: string;
  profileImage: string;
};

export type Language = {
  name: string;
  skill: string;
};

export type SocialMedia = {
  isHidden: boolean;
  icon: string;
  link: string;
};

export type Entry = {
  isHidden: boolean;
  entryYear: string;
  quitYear: string;
  title: string;
  company: string;
  description: string;
  markdownText: string;
};

export type Skill = {
  title: string;
  listNames: string[];
};

export type State = {
  posts: Post[];
  basicInfo: BasicInfo;
  languages: Language[];
  socialMedia: SocialMedia[];
  workExperience: Entry[];
  education: Entry[];
  codingSkills: Skill[];
  designSkills: Skill[];
};

export const initialState: State = {
  posts: [],
  basicInfo: {} as BasicInfo,
  languages: [],
  socialMedia: [],
  workExperience: [],
  education: [],
  designSkills: [],
  codingSkills: [],
};

const getState = () => useContext(StateContext);

export default getState;
