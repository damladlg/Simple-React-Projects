import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"> App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <CartSummary cart={this.props.cart}
                                removeFromCard={this.props.removeFromCard} />
                            { /*Cart Appden Naviye naviden Cart Summarye props ile geçiyor*/}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
