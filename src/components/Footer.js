import React, {component, Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {

  constructor(props){
    super(props);
  }


render(){
  return(
    
    <>
    <div className="footer">
        <div className="contain">
            <div className="col">
                <h1>Menus</h1>
                <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/movies"><li>Movies</li></Link>
                <Link to="/oscars2020"><li>The Oscars</li></Link>
                <Link to="/reports"><li>Reports</li></Link>
                <Link to="/contact"><li>Contact Us</li></Link>
                </ul>
            </div>
            <div className="col">
                <h1>Support</h1>
                <ul>
                    <a href="https://www.imdb.com/" target="blank"><li>Visit IMDb</li></a>
                </ul>
            </div>
            <div className="col social">
                <h1>Social</h1>
                <ul>
                    <a href="https://www.facebook.com/" target="blank"><i className="fa fa-facebook foot-social"></i></a>
                    <a href="https://www.youtube.com/" target="blank"><i className="fa fa-youtube foot-social"></i></a>
                    <a href="https://www.twitter.com/" target="blank"><i className="fa fa-twitter foot-social"></i></a>
                    <a href="https://www.reddit.com/" target="blank"><i className="fa fa-reddit foot-social"></i></a>
                    <a href="https://www.instagram.com/" target="blank"><i className="fa fa-instagram foot-social"></i></a>
                </ul>
            </div>
            <div className="clearfix"></div>
        </div>
        <h5 style={{textAlign: 'center', margin:'20px 0 0 0', padding: '5px', backgroundColor: '#02c2b8'}}>&copy; Sushant Pokharel</h5>
    </div>  
    </>
    
  );
}
}
