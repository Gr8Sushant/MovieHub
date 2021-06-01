import React, {Component} from 'react';
import './css/reports.css'

export default class Reports extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            
             <div className="page">
             <h1>What`s New</h1>
                <div className="box-container">
                <div className="boxes-body">
                    <p style={{color:"var(--clr-accent)", fontSize:"25px", marginBottom:"20px"}}>Black Widow Takes On</p>
                    <p>The start of 2020 means we’re not too far off the next Marvel movie – and the beginning of the MCU’s Phase 4. Kicking the whole thing off will be the long-awaited Black Widow solo movie, a more grounded spy tale focusing on Scarlett Johansson’s Russian operative Natasha Romanoff that digs into the secret past she spent the Avengers and Captain America movies running away from.</p>
                </div>

                </div>

                <div className="box-container">
                <div className="boxes-body">
                <p style={{color:"var(--clr-accent)", fontSize:"25px", marginBottom:"20px"}}>Bond's Producers</p>
                    <p>With the 25th official Bond film, No Time To Die, headed to our screens this April, it's only natural that producers and franchise overseers Barbara Broccoli and Michael G. Wilson are out doing publicity.</p>
                </div>
                </div>

                <div className="box-container">
                <div className="boxes-body">
                <p style={{color:"var(--clr-accent)", fontSize:"25px", marginBottom:"20px"}}>Doctor Strange Sequel</p>
                    <p>The Marvel Cinematic Universe has chugged along successfully for more than a decade now, but it has hit the occasional directorial speed bump, most notably when Edgar Wright left Ant-Man. Another has just occurred, as Scott Derrickson is citing the age-old "creative differences" and is no longer directing Doctor Strange In The Multiverse Of Madness.</p>
                </div>
                </div>

                <div className="box-container">
                <div className="boxes-body">
                <p style={{color:"var(--clr-accent)", fontSize:"25px", marginBottom:"20px"}}>Avatar 2: New Concept Art</p>
                    <p>We're still a ways away from the arrival of the first Avatar sequel, but James Cameron and his team are making sure we don't all forget that a return trip more than one, in fact to Pandora is booked and in the works.</p>
                </div>
                </div>
                <div className="box-container">
                <div className="boxes-body">
                <p style={{color:"var(--clr-accent)", fontSize:"25px", marginBottom:"20px"}}>Tom Holland Gets Candid About Quitting Instagram</p>
                    <p>Tom Holland and Chris Pratt's new Pixar film is a fantasy adventure centered around magic, but it's also a cautionary tale about technology. In an exclusive interview with E! News, the Onward stars reflected on what they hope audiences will take away from the film.</p>
                </div>
                </div>
                
        </div>
    </>
    );
    }

}