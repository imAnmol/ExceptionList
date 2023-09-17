import './App.css';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/header';
import ExceptionList from './components/exceptionList';
import './App.css';
import MiniDrawer from './components/sidebar';

function App() {
  return (
    <div className="App">
      
        <Row>
          <Header />
        </Row>
        <div style={{height: '10px'}}></div>
        
        
        <ExceptionList/>
        
        
        
        
      
      
    </div>
  );
}

export default App;
