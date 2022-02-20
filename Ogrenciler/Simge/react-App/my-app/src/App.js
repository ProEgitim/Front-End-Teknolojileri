import Brand from './brand';
import Profile from './profile';
import search from './search';
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
  