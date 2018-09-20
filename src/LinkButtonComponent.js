import React, { Component } from 'react';

class LinkButtonComponent extends Component {

    openLink(link) {
        window.open(link);
    } 

    render() {
        return(
            <div>
                <button onClick={()=>{this.openLink(this.props.link)}}>{this.props.name}</button>
            </div>
        )
    }
}

export default LinkButtonComponent;