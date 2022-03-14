import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './components/layout/Navbar'

/*
 * App Component
 *
 * @return <Router>
 */

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main>
          Content
        </main>
      </div>
    </Router>
  );
}

export default App;
