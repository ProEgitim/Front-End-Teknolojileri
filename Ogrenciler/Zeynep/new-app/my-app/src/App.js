import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
// import Search from './Search';
import { Container, Row, Col } from 'reactstrap'
import './App.css';
import Title from "./Title";
import React from "react";


function App() {
    return (
        <div>
            <Container>
                <Row>
                    <Navi/>
                    <Title/>
                </Row>
                <Row>
                    <Col xs="3">
                        <CategoryList title="Category List"/>
                    </Col>
                    <Col xs="9">
                        <ProductList title="Product List"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;



