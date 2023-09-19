import './App.css';
import {Row} from 'reactstrap';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';


import Header from './components/header';
import ExceptionList from './components/exceptionList';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ExceptionDetails from './components/exceptionDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Row>
          <Header />
          <ToastContainer />
        </Row>

        <div style={{height: '10px' , margin: '30px'}}></div>
        
        <Routes>
          <Route path="/" element={<ExceptionList/>} />
          <Route path="/exception-details/:id" element={<ExceptionDetails/>} />
        </Routes>
        

        </Router>
        
        
        
        
      
      
    </div>
  );
}

export default App;
