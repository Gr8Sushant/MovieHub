import React, { Component} from 'react';
import axios from 'axios';

export default class Movielist extends Component {

    constructor(props) {
      super(props);
      this.state = {
        movies: []
      };
    }

    componentDidMount() {
        axios
          .get("http://localhost:3000/movies")
          .then(res => {
            this.setState({ movies: res.data })
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
        <div className="movie-row">
            <div className="movie-column">
                
                {this.state.movies.map(item => (
                    <>
                    <div className="movie-content" showDesc="false">
                        <img src={item.poster} alt="Poster" style={{width:"100%"}} />
                        <p>{item.title}</p>                   
                    </div>
                    </>
                ))}
                
            </div>
        </div>
    </section>
    </>
  );
}
}
