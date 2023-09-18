import './App.css';
import {Row} from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';


import Header from './components/header';
import ExceptionList from './components/exceptionList';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Router>
        <Row>
          <Header />
          <ToastContainer />
        </Row>
        <div style={{height: '10px' , margin: '30px'}}></div>
        
        
        <ExceptionList/>
        </Router>
        
        
        
        
      
      
    </div>
  );
}

export default App;
