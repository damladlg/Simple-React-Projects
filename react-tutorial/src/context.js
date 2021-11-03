import React, { Component } from 'react'

const AppContext = React.createContext();
// Provider, Consumer

export class AppProvider extends Component {
    state = {
        currentCategory: "", products: [], cart: []
    };

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

const AppConsumer = AppContext.Consumer;
