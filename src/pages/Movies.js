import React, {Component} from 'react';
import MovieSlider from '../components/Sliders/MovieSlider';
import Movietitles from '../components/Descriptions/Movietitles';
export default class Movies extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
             <MovieSlider/>
             <Movietitles/>
            </>
        );
    }

}