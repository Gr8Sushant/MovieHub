import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

export default class Movietitles extends Component {

    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
    }

    componentDidMount() {
        axios
          .get("http://localhost:3000/movies")
          .then(res => {
            this.setState({ posts: res.data })
          })
          .catch(error => {
            console.log("Error");
          });
      }



render(){
  return(
    <>
    <section className="movie-grid main">
        <p className="movie-head">Movies</p>
        <div className="grid-row">
            <div className="grid-column">                
            {this.state.posts.map(item => (
          <Movie key={item.id} info={item} showDesc="false" />
            ))}                
            </div>
        </div>
    </section>
    </>
  );
}
}