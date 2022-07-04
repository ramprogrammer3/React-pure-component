

class App extends React.Component{
    state = {
      val : 1
    }
    changeState = () =>{
      this.setState({val : 1})
    }
    render(){
      console.log("render component call ")
      return(
        <div>
          <h1>App component</h1>
          <h2>the value of a is {this.state.val} </h2>
          <button onClick={this.changeState}>Change state</button>
        </div>
      )
    }
  }


  // pure component to prevent render 

  class App extends React.PureComponent{
    state = {
      val : 1
    }
    changeState = () =>{
      this.setState({val : 1})
    }
    render(){
      console.log("render component call ")
      return(
        <div>
          <h1>App component</h1>
          <h2>the value of a is {this.state.val} </h2>
          <button onClick={this.changeState}>Change state</button>
        </div>
      )
    }
  }

  

  class App extends React.PureComponent{
    state = {
      val : 1
    }
    changeState = () =>{
      this.setState((prevState)=>{
        return {val : prevState.val + 1}
      })
    }
    render(){
      console.log("render component call ")
      return(
        <div>
          <h1>App component</h1>
          <h2>the value of a is {this.state.val} </h2>
          <button onClick={this.changeState}>Change state</button>
        </div>
      )
    }
  }


  console.log("*********************************************************")


  class App extends React.PureComponent{
    state = {
      val : 1
    }
    changeState = () =>{
      this.setState((prevState)=>{
        return {val : prevState.val + 1}
      })
    }
    render(){
      console.log("app component render ")
      return(
        <div>
          <h1>App component</h1>
          <h2>the value of a is {this.state.val} </h2>
          <button onClick={this.changeState}>Change state</button>
          <Home a = {this.state.val} />
        </div>
      )
    }
  }


  class Home extends React.PureComponent{
    render(){
        console.log("child component render ")
        return(
            <div>
                <h1>Home component </h1>
                <h2> the value of a is {this.props.a} </h2>
            </div>
        )
    }
}
  console.log("*********************************************************")