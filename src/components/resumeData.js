import { createContext, useContext } from 'react';
import dataEngineerResume from './dataresume.json';
import dataScienceResume from './dataresume_extend.json';

export const resumeProfiles = {
  'data-engineer': {
    label: 'Data Engineer',
    data: dataEngineerResume,
  },
  'data-science': {
    label: 'Data Science',
    data: dataScienceResume,
  },
};

export function getProfileSlugFromPath(pathname) {
  const slug = pathname.replace(/^\/+|\/+$/g, '');
  return resumeProfiles[slug] ? slug : null;
}

const ResumeDataContext = createContext(null);

export const ResumeDataProvider = ResumeDataContext.Provider;

export function useResumeData() {
  const data = useContext(ResumeDataContext);

  if (!data) {
    throw new Error('useResumeData must be used inside ResumeDataProvider');
  }

  return data;
}
