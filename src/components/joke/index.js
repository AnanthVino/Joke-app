import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './joke.css';

class Joke extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: 'Chuck Norris can text using his walkie talkie and without batteries.',
      firstname: localStorage.getItem("firstname"),
      lastname: localStorage.getItem("lastname")
    };

    this.getJoke = this.getJoke.bind(this);
  }

  componentDidMount(){
    const firstJoke = this.state.joke.replace("Chuck Norris", "" + this.state.firstname + " " + this.state.lastname);
    this.setState({
      joke: firstJoke
    });
  }

  getJoke = () => {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => {
        const nextJoke = response.data.value.replace("Chuck Norris", "" + this.state.firstname + " " + this.state.lastname);
        this.setState({
          joke: nextJoke
        });
      })
  }

  logout = () => {
    localStorage.clear();
  }

  render() {
    return ( 
      <div className="joke-container"> 
        <div className="d-flex justify-content-end m-t10 p-r10">
          <Link className="btn btn-md jokeForm rounded-0" to="/" onClick={this.logout}>Logout</Link>
        </div>
        <div className="container text-center m-t100">
          <h1 className="text-white"> {this.state.firstname} {this.state.lastname} Joke</h1>  
          <h3 className="text-white m-t10"> {'"' + this.state.joke + '"'}</h3>  
          <button type="button" className="btn btn-md jokeForm rounded-0 m-t10" onClick={this.getJoke}> Tell me a joke</button>  
        </div>
      </div>
    );
  }
}

export default Joke;