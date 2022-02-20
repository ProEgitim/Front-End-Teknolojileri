import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap'

export default function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi />
        </Row>
        <Col xs="3">
          <Brand title="Brand Component" />
        </Col>
        <Col xs="6">
          <Searchbar title="Searchbar Component" />
        </Col>
        <Col xs="3">
          <Icon title="Icon Component" />
        </Col>
      </Container>
    </div>
  );
}


