import React, { Component } from 'react'
import Header from "../common/Header";

class Home extends Component {

    render() {
        return(
            <Header
            title="Welcome To Our Studio!"
            subtitle="It's Nice To Meet You"
            buttonText="Tell Me More"
             />
        )
    }
}

export default Home;