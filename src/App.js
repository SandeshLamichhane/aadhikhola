import Header from './components/Header/Header.js'
import Intro from './components/intro/intro.js'
import Event from './components/Event/event.js';
import Footer from './components/Footer/Footer.js';
import Team from './components/Team/team.js'
import Join from './components/Login/Join.js';
import {
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="p-2 bg-gray-900 h-screen w-full">
      <h1>
        <Link to='/login'>{'Click Here to Login'}</Link>
      </h1>
    </div>
  );
}

export default App;
