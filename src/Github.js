import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
     constructor(props){
          super(props);
          this.state ={
               name: "",
               imgUrl:""
          }
     }

    async componentDidMount(){
          let url =`https://api.github.com/users/${this.props.name}`
          const val = await axios.get(url);
          let final = val.data;
          this.setState( {
               name:final.name,
               imgUrl:final.avatar_url
          })
     }
  render(){

    return (
          <div>
               <h1>Github Profile!</h1>
               <p>Name: {this.state.name}</p>
               <img src={this.state.imgUrl} alt={this.props.name}/>
          </div>
    )
  }
}

export default App;




// https://api.github.com/users/
