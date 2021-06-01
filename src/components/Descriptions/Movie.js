import React, { Component } from "react";
import { Link } from "react-router-dom";


class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.info;
    return (
      <>      
          <div className="desc-top main">
            {this.props.showDesc == "true" && <img className="poster" src={data.poster} />}

            <div className="details">
            {this.props.showDesc == "true" && (
              <p className="title">{data.title}</p>
            )}
            {this.props.showDesc == "true" && <p className="stats">Director/s: {data.Director}</p>}
            {this.props.showDesc == "true" &&<p className="stats">Star Cast: &nbsp;{data.Stars}</p>}
            {this.props.showDesc == "true" &&<p className="stats">Rating: &nbsp;{data.rate}</p>}
            {this.props.showDesc == "true" &&<p className="stats">Budget: &nbsp;{data.Budget}</p>}
            </div>
            <div className="desc">
            {this.props.showDesc == "true" &&<p className="stats">Plot Summary</p>}
              {this.props.showDesc == "true" &&<p>{data.desc}</p>}
            </div>
          </div>
          <div className="main">
          
            <div className="grid-column">
            <Link to={`/${data.id}`}>
                <div className="content">
                    {this.props.showDesc == "false" && <img src={data.poster} style={{width:"100%"}}/>}
                </div>
                {this.props.showDesc == "false" && <p>{data.title}</p>}
                </Link>
            </div>
            </div>
      </>
    );
  }
}

export default Movie;
