import React, { Component } from "react";
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Navi from "./Navi";

export default class App extends Component {

  state = {
    currentCategory: "", products: [], cart: []
  };

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));;
  }

  componentDidMount() {
    this.getProducts();
  }

  addToChart = (product) => {
    alert(product.productName + " eklendi.");
    let newCart = this.state.cart;
    newCart.push({ product: product, quantity: 1 }); //product ve adedi tutulacak
    this.setState({ cart: newCart });
  }

  render() {
    let productInfo = { title: "ProductList" }
    let categoryInfo = { title: "CategoryList" }
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList
                addToChart={this.addToChart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div >
    );
  }

}

