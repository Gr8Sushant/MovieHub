import React, {component, Component} from 'react';


export default class Trailers extends Component {

  constructor(props){
    super(props);
  }


render(){
  return(
       <>
        
        <section className="video-section main">
        <p className="movie-head">Movie Trailers</p>
        <iframe src="https://www.youtube.com/embed/Rszr56AH3Co" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/Ify9S7hj480" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/hej47fWFLQs" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
       </>
  );
}
}
