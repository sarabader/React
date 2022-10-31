import React, { Component } from 'react'
import { Button } from '@chakra-ui/react'


export default class Classcom extends Component {
    constructor(){
    super()
    this.state={
      name:'sara'
    
    }
    this.namc=()=> this.setState({name: this.state.name= 'mmmm'})
}
// componentDidCatch(){
//     console.log("comonent");
// }

  render() {
    // console.log("render");
        return (
      <div>
       
        <Button onClick={this.namc}>clickMe</Button>
        {this.state.name}
      </div>
    )
  }
}
