import React from 'react'
import "./counter.css";

class Counter extends React.Component{
constructor(){
    super()
    this.state={count:0,name:"aishu"}
    this.increment=this.increment.bind(this)
}
increment()
{
  if(this.state.count<10)
  this.setState({count:this.state.count+1})
  console.log(this.state.count)
}
decement=()=>
{      if(this.state.count>0)
  {

    this.setState({count:this.state.count-1})
    console.log(this.state.count)
  }
}
reset=()=>{
  this.setState({count:0})
}
render()
{
  return(
      <div className='box'>
        <h1 className='txt'>Counter</h1><br/>
        <button onClick={this.increment} className='btn'>+</button>
        <span className='txt'>{this.state.count}</span>
        <button onClick={this.decement} className='btn'>-</button><br/>
        <button onClick={this.reset} className='btn'>reset</button>
      </div >
  ) 
}
}


export default Counter