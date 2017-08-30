import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            isMenuOpen: false
        }
    }

    onHamClick(){
        this.setState(Object.assign({},{ isMenuOpen: !this.state.isMenuOpen}))
    }

    render() {
        return (
            <nav>
                <button onClick={() => this.onHamClick()}></button>
                    Is it? {this.state.isMenuOpen ? 'true' : 'false'}
                
            </nav>
        )
    }    
}