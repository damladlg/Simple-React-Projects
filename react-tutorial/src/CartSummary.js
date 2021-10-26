import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink
} from "reactstrap";

export default class CartSummary extends Component {
    renderEmptyCart() {
        return (
            <NavItem>
                <NavLink>Empty Card</NavLink>
            </NavItem>
        )
    }
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                {cartItem.product.productName}
                                <Badge color="success" >a</Badge>
                            </DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </UncontrolledDropdown>)
    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
            </div>
        )
    }
}
