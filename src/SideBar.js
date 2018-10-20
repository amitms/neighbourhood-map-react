import React, {Component} from 'react';

class SideBar extends Component {
    constructor() {
        super();
            this.state = { 
                info: '',
                query: '',
                markers: []
                };
            }

    componentDidMount() {
        this.setState({markers: this.props.markers});
        this.props.markers.map(value => 
            this.state.markers.push(value.name));
//        console.log(this.props.virtualMarker);
//        console.log(this.state.markers);
    }  

    open = () => {
        const SideBar = document.querySelector('.SideBar');
        SideBar.style.display === 'none' ? SideBar.style.display = 'block' : SideBar.style.display = 'none';
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
                            <li key={marker.id}>
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