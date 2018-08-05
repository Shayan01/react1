import React,{Component} from 'react'

class Toggle extends Component{
    constructor(props){
        super(props)
        this.state = {
            isToggleOn : false
        }
    this.buttonOnClick = this.buttonOnClick.bind(this);
    }

    buttonOnClick(e){
        this.setState((preState)=>({
            isToggleOn : !preState.isToggleOn  
        }))
    }
    render(){
        return(
            <button onClick={this.buttonOnClick}>{this.state.isToggleOn ? ON:OFF}</button>
        )
    }
}