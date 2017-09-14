import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import Home from './home'
import Teams from './teams'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/teams" component={Teams} />
                    <Footer />
                </div>    
            </BrowserRouter>
        )
    }
}

export default App