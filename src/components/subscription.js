import React, { Component } from 'react';

class Subscription extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: ''
        }
    }

    saveSubscription = (email) => {

    }

    handleSubmit = (event) => {
        event.preventDefault()
        let email = this.state.email
        let regex = /\S+@\S+\.\S+/

        if (regex.test(email)) {
            this.saveSubscription(email)
        }
    }

    onChangeInput = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    render() {
        return (
            <div className="subscribe-panel">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="youremail@email.com"
                            value={this.state.email}
                            onChange={this.onChangeInput}
                        />    
                    </form>
                    <small>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, repellendus eaque! Ad, voluptatibus libero delectus sint, minima eius at saepe doloremque ex aliquam distinctio? Consequatur saepe accusamus accusantium quidem eaque.    
                    </small>
                </div>
            </div>
        );
    }
}

export default Subscription;