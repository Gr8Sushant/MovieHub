import React from 'react';

function Searchbar(){
	return(
		<section id="searchbar">
        <form action="/search" method="GET">
          <input type="text" placeholder="Search Here..." name='s' id="search" />
          <button type="submit" className="button_1"><span>Search</span></button>
        </form>
    </section>
	)
}

export default Searchbar;