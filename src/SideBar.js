import React, {Component} from 'react';

class SideBar extends Component {
    constructor() {
        super();
            this.state = { 
                markers: [],
                searchquery: '',
                newmarkers:[]
                };
            }

    componentDidMount() {
        this.setState({markers: this.props.markers});
        this.setState({newmarkers: this.props.markers});
        this.props.markers.map(value => 
            this.state.markers.push(value.name));
//        console.log(this.state.markers);
    }  

    open = () => {
        const SideBar = document.querySelector('.SideBar');
        SideBar.style.display === 'none' ? SideBar.style.display = 'block' : SideBar.style.display = 'none';
    }
    
    search = (event) => {
        var query = event.target.value.trim().toLowerCase();
        this.setState({searchquery: query});
        if(query.length === 0)
            this.setState({markers: this.props.markers});
        else
            this.setState({markers: this.props.markers.filter(p => 
                p.name.toLowerCase().includes(query))});
            this.setState({newmarkers: this.state.markers});
//            console.log(this.state.newmarkers);
/*********************************************************/ 
    this.infoWindow();
    }
/*********** Rerender markers and Info Window ********************/   
    infoWindow = () => {
        this.setState({newmarkers: this.state.markers});

        const home = {lat: 39.2029072, lng: -85.9235928};    
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: home,          
            zoom: 17,
            mapTypeId: 'roadmap'
        });

        var infowindow = new window.google.maps.InfoWindow();
        this.state.newmarkers.map(myVenue => {
            var contentString = `${myVenue.name}, ${myVenue.location}`
            var markerVenues = new window.google.maps.Marker({
              position: {lat: myVenue.latitude , lng: myVenue.longitude},
              map: map,
              title: myVenue.name 
            })
            markerVenues.setAnimation(window.google.maps.Animation.DROP);
            infowindow.setContent(contentString);
            infowindow.open(map, markerVenues);

            console.log(this.state.newmarkers);

            return true;
        });  
    }
/*********************************************************/ 
    render() {

        return (
            <div>
                <div className="title">Neighbourhood Map (Columbus, IN)- React -Udacity</div>

                <div className="menuicon" onClick={this.open}>
                    <div className="menuiconline"></div>
                    <div className="menuiconline"></div>
                    <div className="menuiconline"></div>
                </div>
                <div className="SideBar">
                    <div className="form" role="form">
                        <input type="text"
                           aria-labelledby="filter" placeholder="Search"
                           className="input" role="search"
                           onChange={this.search}/>
                    </div>
                    <ul>
                        {this.state.markers.map((marker) =>
                            <li key={marker.id} onKeyPress={this.infoWindow} 
                                                onClick={this.infoWindow} 
                                                tabIndex="0" role="button">
                                   {marker.name}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
    