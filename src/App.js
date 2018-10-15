import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    const ApiKey = 'AIzaSyBrRQlBPiy6icvdiqbmIrj0DQ1RuI1FKEM';  //AIzaSyAD4vpwyw4zFgzo_4_RG4lAaVwCIVZM9Jc
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${ApiKey}&v=3&callback=initMap`);
    window.initMap = this.initMap
  }

  initMap = () =>{
    // eslint-disable-next-line
        const home = {lat: 39.2356323, lng: -85.8651852};
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: home,          
          zoom: 14
        });
        const marker = new window.google.maps.Marker({
        position: home,
        map: map
    });
      }

  render() {
    return (
      <div className="App">
        <div id="map"></div>
      </div>     

      )
  }
}
function loadScript(url){
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)

}

export default App;