import Category from "./Category";
import Navi from "./Navi";
import Productlist from "./Productlist";
import {Container, Row, Col} from 'reactstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
        <Navi/>
        </Row>
        <Row>
        <Col xs='3'> <Category/> </Col>
        <Col xs="9">  <Productlist/> </Col>
        </Row>
        </Container>
    </div>
  );
}

export default App;
