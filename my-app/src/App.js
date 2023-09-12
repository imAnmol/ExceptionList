import './App.css';
import { Container, Row, Col } from 'reactstrap';

import TableComponent from './components/tableComponent';
import Filter from './components/filter';
import Header from './components/header';
import ParentComponent from './components/parentComponent';

function App() {
  return (
    <div className="App">
      
        <Row>
          <Header />
        </Row>
        <div style={{height: '10px'}}></div>
        {/* <Filter/> */}
        
        <ParentComponent/>
        
        
        
      
      
    </div>
  );
}

export default App;
