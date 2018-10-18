import React, {Component} from 'react';

class SideBar extends Component {
    open = () => {
        const SideBar = document.querySelector('.SideBar');
        SideBar.style.display === 'none' ? SideBar.style.display = 'block' : SideBar.style.display = 'none';
    }
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