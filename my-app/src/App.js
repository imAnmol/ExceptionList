import './App.css';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/header';
import ExceptionList from './components/exceptionList';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      
        <Row>
          <Header />
          <ToastContainer />
        </Row>
        <div style={{height: '10px' , margin: '30px'}}></div>
        
        
        <ExceptionList/>
        
        
        
        
      
      
    </div>
  );
}

export default App;
