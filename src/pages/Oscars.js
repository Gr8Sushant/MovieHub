import React, { Component } from "react";
import './css/oscars.css'
import axios from 'axios';

class Oscars extends Component {
    constructor(props) {
        super(props);
        this.state = {
          oscars: []
        };
      }
  
      componentDidMount() {
        axios
        .get("http://localhost:3000/oscars")
        .then(res => {
          this.setState({ oscars: res.data })
        })
        .catch(error => {
          console.log("Error");
        });
        }
  

  render() {
    return (
    <>
        <div className="oscars-page main">
            <p className="title-main">Oscars 2020: The winners</p>
        {this.state.oscars.map(item => (
            <section className="oscar-main">
              <p className="title">Award Title: &nbsp;&nbsp;{item.title}</p>
              <p className="oscar-name">Name:&nbsp;{item.name}</p>
              <p className="oscar-name">Movie:&nbsp;{item.movie}</p>
              <div className="oscar-img"><img src={item.image}/></div>
            </section>
          ))}
        </div>      
    </>
    );
  }
}

export default Oscars;
