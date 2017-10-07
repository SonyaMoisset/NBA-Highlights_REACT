import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Header, Footer, Teams, Team } from '../components'
import { Home } from '../containers'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/teams" component={Teams} />
                        <Route exact path="/team/:id" component={Team} />
                    <Footer />
                </div>    
            </BrowserRouter>
        )
    }
}
