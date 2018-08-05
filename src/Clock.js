import React,{Component} from 'react'

class Clock extends Component{
    constructor(props){
        super(props)
        this.state ={
            date : new Date()
        };
    }
    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),1000)

    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            date : new Date()
        })
    }
    clockClick(e){
        e.preventDefault();
        alert('Shayan');
    }
    render(){
        return <div onClick={this.clockClick}> {this.state.date.toLocaleTimeString()} </div>
    }
}

export default Clock