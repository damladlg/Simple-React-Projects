import React, { Component } from "react";
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

export default class App extends Component {
  state = {
    currentCategory: ""
  };
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName })
  };
  render() {
    let productInfo = { title: "ProductList" }
    let categoryInfo = { title: "CategoryList" }
    return (
      <div>
        <Container>
          <Row>

          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div >
    );
  }

}

