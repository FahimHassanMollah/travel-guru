import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class Maps extends Component {
  
    constructor(props) {
      
        super(props);
        this.lats=this.props.lat;
        this.lngs=this.props.lng;
       
      }
    render() {
       
        return (
           
            <div>
                <Map google={this.props.google} initialCenter={{
            lat:this.lats,
            lng: this.lngs
          }} zoom={10}>

                    <Marker onClick={this.onMarkerClick}
                        
                        position={{lat:this.lats, lng:this.lngs}}/>

                  
                </Map>
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyAtNWUzr1ga2y-y0hzrUrkZmbn7qqT0_jk")
  })(Maps)