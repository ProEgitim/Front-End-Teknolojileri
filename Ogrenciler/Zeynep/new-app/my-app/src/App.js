// import Navi from './Navi';
// import CategoryList from './CategoryList';
// import ProductList from './ProductList';
import Search from './Search';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
// import Title from "./Title";
import React from "react";
import Brand from "./Brand";
import Profile from "./Profile";


function App() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs="2">
                        <Brand/>
                    </Col>
                    <Col xs="6">
                        <Search/>
                    </Col>
                    <Col xs="4">
                        <Profile/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;



