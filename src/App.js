// eslint-disable-next-line
import logo from './logo.svg';
import './components/style/App.css';
import About from './components/about';
import Nabbar from './components/nabbar';
import Education from './components/education';
import Skills from './components/skills';
import Experience from './components/experience';
import Project from './components/project';
import Qualification from './components/qualification';
import Contact from './components/contact';
import {
  getProfileSlugFromPath,
  ResumeDataProvider,
  resumeProfiles,
} from './components/resumeData';

function App() {
  const pathname = window.location.pathname;

  const profileSlug = getProfileSlugFromPath(pathname);

  if (!profileSlug) {
    return (
      <main className="route-blocked">
        <h1>Resume page unavailable</h1>
        <p>Please use a profile-specific resume link.</p>
      </main>
    );
  }

  const profile = resumeProfiles[profileSlug];

  return (
    <ResumeDataProvider value={profile.data}>
      <Nabbar />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Education />
      <Qualification />
      <Contact />
      
    </ResumeDataProvider>
  );
}

export default App;
