import  React, { Component } from 'react';
import axios from 'axios';

class FoursquaresAPI extends Component{
	constructor(props) {
    super(props);
    this.state = {
		venues: []
		};
  	}

	componentDidMount(){
		const exploreQuery = "https://api.foursquare.com/v2/venues/explore?";
		const parameters = {
		client_id: "1GQRBJDSOIGQZFBJKOWQIWX5OHUQHCQHXELYKW54MO5GHZHN",
		client_secret: "ZY33445JA0GQOP4KMBW5SYGXKQKTMMAOVUPOVRKHDEWLNEPC",
		query: "food",
	//  ll:  "39.2356323,-85.8651852",
		near: "Columbus",
		v: "20182507"
	    }

		axios.get(exploreQuery + new URLSearchParams(parameters))
			.then(response => {
	//		venues: response.data.response.groups[0].items
			console.log(response)

			})
			.catch(error => {
			console.log("ERROR!! " + error)
			})
	    
	 // InfoWindow 
	/*
	  // Create An InfoWindow
	    var infowindow = new window.google.maps.InfoWindow()

	    // Display Dynamic Markers
	    this.state.venues.map(myVenue => {

	      var contentString = `${myVenue.venue.name}`

	      // Create A Marker
	      var marker = new window.google.maps.Marker({
	        position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
	        map: map,
	        title: myVenue.venue.name
	      })

	      // Click on A Marker!
	      marker.addListener('click', function() {

	        // Change the content
	        infowindow.setContent(contentString)

	        // Open An InfoWindow
	        infowindow.open(map, marker)
	      })      
	    })
	    */
	    
	}
	
	render(){
		return(
			<ul>{this.venues}</ul>
			)
	}

	
}
export default FoursquaresAPI; 

