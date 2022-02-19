import CategoryList from "./CategoryList";
import Navi from './Navi';
import ProductList from "./ProductList";
import { Container, Row, Col } from 'reactstrap';


export default function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title="CategoryList Compenent" />
          </Col>
          <Col xs="9">
            <ProductList />
          </Col>
        </Row>
      </Container>
        
        
    </div>
  );
}


