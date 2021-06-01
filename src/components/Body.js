import React, {component, Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { render } from '@testing-library/react';
import axios from 'axios';

export default class Body extends Component {

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
        <p className="movie-head">Top Movies</p>
        <div className="grid-row">
            <div className="grid-column">
                
                {this.state.movies.map(item => (
                    <>
                    <div className="content">
                    <a href="#">
                        <img src={item.poster} alt="Poster" style={{width:"100%"}}/>
                        <p>{item.title}</p>
                    </a>
                    </div>
                    </>
                ))}                
            </div>
        </div>
    </section>
    <section className="movie-grid main">
        <p className="movie-head">Most Viewed</p>
        <div className="grid-row">
            <div className="grid-column">
                <div className="content"><a href="#">
                        <img src="images/1.jpg" alt="Poster" style={{width:"100%"}}/>
                        <p>Blade Runner</p>
                    </a>
                </div>
            </div>
            <div className="grid-column">
                <div className="content"><a href="#">
                        <img src="images/2.jpg" alt="Poster" style={{width:"100%"}}/>
                        <p>Alladin</p>
                    </a>
                </div>
            </div>
            <div className="grid-column">
                <div className="content"><a href="#">
                        <img src="images/5.jpg" alt="Poster" style={{width:"100%"}}/>
                        <p>Avatar</p>
                    </a>
                </div>
            </div>
            <div className="grid-column">
                <div className="content"><a href="#">
                        <img src="images/4.jpg" alt="Poster" style={{width:"100%"}}/>
                        <p>Moonlight</p>
                    </a>
                </div>
            </div>
            <div className="grid-column">
                <div className="content"><a href="#">
                        <img src="images/8.jpg" alt="Poster" style={{width:"100%"}}/>
                        <p>Captain Marvel</p>
                    </a>
                </div>
            </div>
            <div className="grid-column">
                <div className="content"><a href="#">
                        <img src="images/8.jpg" alt="Poster" style={{width:"100%"}}/>
                        <p>Captain Marvel</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
       </>
  );
}
}
