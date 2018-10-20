import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SideBar from "./SideBar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    mapIsReady: false,
    markers: require("./venues.json"), 
    venues:[]
    };
  }

  componentDidMount() {
/*********** Foursquare API fetch for venues from axios ********************/    
    const exploreQuery = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
    client_id: "1GQRBJDSOIGQZFBJKOWQIWX5OHUQHCQHXELYKW54MO5GHZHN",
    client_secret: "ZY33445JA0GQOP4KMBW5SYGXKQKTMMAOVUPOVRKHDEWLNEPC",
    query: "food",
    near: "Columbus IN",
    radius: 200,   
    v: "20182507"
      };

    axios.get(exploreQuery + new URLSearchParams(parameters))
      .then(response => {
//        console.log(response)
        this.setState({
        venues: response.data.response.groups[0].items
        })
      })
      .catch(error => {
      console.log("ERROR!! " + error)
      });    

/*********** Google Map API ********************/    
    const ApiKey = 'AIzaSyBrRQlBPiy6icvdiqbmIrj0DQ1RuI1FKEM';  //use AIzaSyBrRQlBPiy6icvdiqbmIrj0DQ1RuI1FKEM or AIzaSyAD4vpwyw4zFgzo_4_RG4lAaVwCIVZM9Jc (full) 
    var index = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}&v=3`;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => {
      this.setState({ mapIsReady: true });
    });
    index.parentNode.insertBefore(script, index);
  }
/*********************************************************/ 
  componentDidUpdate() {
    const home = {lat: 39.2029072, lng: -85.9235928};

    if (this.state.mapIsReady) {
      var map = new window.google.maps.Map(document.getElementById('map'), {
        center: home,          
        zoom: 17,
        mapTypeId: 'roadmap'
      });
    // eslint-disable-next-line
      const markerHome = new window.google.maps.Marker({
        position: home,
        map: map
      });

/*********** Info Window for venues markers********************/   
      var infowindow = new window.google.maps.InfoWindow();
      this.state.venues.map(myVenue => {
        var contentString = `${myVenue.venue.name}${myVenue.venue.location.address}`
        var markerVenues = new window.google.maps.Marker({
          position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
          map: map,
          title: myVenue.venue.name 
        })
        markerVenues.setAnimation(window.google.maps.Animation.DROP);

        markerVenues.addListener('click', function() {
          infowindow.setContent(contentString);
          infowindow.open(map, markerVenues);

        })
//           this.state.virtualMarkers.push(markerVenues.title);

        return true;
      });   
    }
/*********************************************************/ 
var venueslist = this.state.venues.map(value => value.venue);
console.log(venueslist);

/*********************************************************/   
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SideBar 
//            infoWindow={this.state.info}
//            openInfo={this.markerVenues}
//            virtualMarker={this.state.virtualMarkers}
            markers={this.state.markers}
          />
        </header>
        <div id="map"></div>

      </div>    
      )
  }
}

export default App;