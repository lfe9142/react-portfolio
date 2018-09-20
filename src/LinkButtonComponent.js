import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class LinkButtonComponent extends Component {

    openLink(link) {
        window.open(link);
    } 

    render() {
        return(
            <div>
                <Button 
                    variant="contained" color="primary"
                    onClick={()=>{this.openLink(this.props.link)}}>
                        {this.props.name}
                </Button>
            </div>
        )
    }
}

export default LinkButtonComponent;