import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            clickAge: props.age
        }
    }
incAge =() =>{
    this.setState({
        clickAge: this.state.clickAge +=1
    })
}
    render(){
        const {firstName, lastName, age, color}= this.props;
        return (
            <>
                <h1> {lastName}, {firstName}</h1>
                <p>Age: {this.state.clickAge}</p>
                <p>Hair Color: {color}</p>
                <button onClick={ this.incAge}>Birthday button for {firstName} {lastName}</button>
            </>
        )
    }
}

export default PersonCard;