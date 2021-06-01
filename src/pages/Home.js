import React, {Component} from 'react';
import Trailers from '../components/Trailers';
import Movielist from '../components/Movielist';

export default class Home extends Component {

    constructor(props){
        super(props);
    }
    

    render(){
        return(
            <>
            <div className="landing-main">
            <p className="landing-text"> Welcome to <span><i className="fa fa-play-circle-o"></i> Moviehub</span></p>
            </div>
            <Trailers/>
            <Movielist/>
            </>
        );
    }

}