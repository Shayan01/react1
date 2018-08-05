import React, {Component} from 'react'


class ShowName extends Component{
    render(){
        return(
            <h1>Hi {this.props.name} {this.props.family}</h1>
        )
    }
}
export default ShowName