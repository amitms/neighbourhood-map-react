import React, {Component} from 'react';

class SideBar extends Component {

  
    render() {

        return (
            <div>
                <div className="menuicon" onClick={this.open}>
                    <div className="menuiconline"></div>
                    <div className="menuiconline"></div>
                    <div className="menuiconline"></div>
                </div>
                <div className="SideBar">
                    <div className="form" role="form">
                        <input type="text"
                               aria-labelledby="filter" placeholder="Search..."
                               className="input" role="search"
                               onChange={this.search}/>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default SideBar;