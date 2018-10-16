import React, { Component } from 'react';
import './App.css';
import FoursquaresAPI from './venues.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    mapIsReady: false
    };
  }

  componentDidMount() {
    
    const ApiKey = 'AIzaSyBrRQlBPiy6icvdiqbmIrj0DQ1RuI1FKEM';  //AIzaSyBrRQlBPiy6icvdiqbmIrj0DQ1RuI1FKEM, AIzaSyAD4vpwyw4zFgzo_4_RG4lAaVwCIVZM9Jc (full) 
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

  componentDidUpdate() {
    const home = {lat: 39.2356323, lng: -85.8651852};

    if (this.state.mapIsReady) {
      var map = new window.google.maps.Map(document.getElementById('map'), {
        center: home,          
        zoom: 14,
        mapTypeId: 'roadmap'
      });
    // eslint-disable-next-line
      const marker = new window.google.maps.Marker({
        position: home,
        map: map
      });
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
            Neighbourhood Map - React -Udacity
        </header>

        <div id="map"></div>
        <FoursquaresAPI venues/>
      </div>    

      )
  }
}


export default App;