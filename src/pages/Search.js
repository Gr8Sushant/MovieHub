import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(this.props.location.search);
    const key = urlParams.get("s") != null ? urlParams.get("s") : "";
    axios.get(`http://localhost:3000/SearchItems?q=${key}`).then(res => {
      this.setState({
        results: res.data
      });
    });
  }

  render() {
    const { results } = this.state
    if (Object.keys(results).length && results.length) {
    return (
      <>
        <section className="main" style={{minHeight:"400px"}}>
        <p className="movie-head">Search Result</p>
          <div>
          {this.state.results.map(item => {
            return (
              <div>
                <h3>&nbsp;{item.name}</h3>
                <h3>&nbsp;{item.title}</h3>
                <br/>
                <p style={{width:"60vw",lineHeight:"1.5rem"}}>{item.desc}</p>  
                <br/>
                <hr/>
                <br/>
              </div>
            );
          })}
          </div>
        </section>
      </>
    );
  } else {
    return (
      <div className="main" style={{minHeight:"400px"}}>
        <p className="movie-head">Search Result</p>
        <h4 style={{marginTop:"50px"}}>Content not found</h4>
      </div>
    );
  }
  }
}

export default Search;
