import Navi from './Navi';
import Brand from './Brand';
import Search from './SearchBar';
import Profile from './ProfileMenu';
import { Container, Row, Col } from 'reactstrap'


export default function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi />
          <Col xs="3">
     <Brand title="Brand Component" />
    </Col>
    <Col xs="6">
   <Searchbar title="Searchbar Component" />
   </Col>
   <Col xs="3">
  <ProfileMenu title="Profile Component" />
   </Col>

        </Row>
        
      </Container>

    </div>
  );
}
