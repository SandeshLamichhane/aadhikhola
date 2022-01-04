 import Header from './components/Header/Header.js'
 import Intro from './components/intro/intro.js'
 import Event from './components/Event/event.js';
 import Footer from './components/Footer/Footer.js';
 import Team from './components/Team/team.js'

function App() {
  return (
   <div className="p-2 bg-gray-900 h-screen w-full">
      <Header />
    <Intro /> 
    <Event />
  <Team />
   <Footer />
    
  </div>
  ); 
}

export default App;
