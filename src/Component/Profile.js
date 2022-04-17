import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.person={
        fullName : 'Abir' ,
        bio : 'student',
        imgSrc : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        profession : 'Web developper'

        }
        this.state={
            count : 0 
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState(prevState=> ({
                count: prevState.count + 0.5
            }))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.state)
    }
    render() {
        return (
        <div>
        <h3>{this.person.fullName} </h3>
        <h3>{this.person.bio} </h3>
        <h3>{this.person.profession} </h3>
        <h3> Counter : {this.state.count} </h3>
        <img src={this.person.imgSrc} alt='person' />
        
        </div>
        )
    }
}
