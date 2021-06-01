import React, { Component } from "react";
import axios from "axios";
import Movie from './Movie';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
          movies: []
        };
      }
  

  componentDidMount() {
    axios
      .get(`http://localhost:3000/movies/${this.props.match.params.postId}`)
      .then(res => {
        this.setState({
          movies: res.data
        });
      });
  }

  render() {
    return <Movie info={this.state.movies} showDesc="true" />;
  }
}

export default Description;
