import Header from './components/Header';
import Rooms from './components/Rooms';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
    <>
    <Header />
    <Rooms />
    </>
    </Router>
  );
}

export default App;
