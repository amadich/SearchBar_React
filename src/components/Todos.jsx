import React, { Component } from 'react';
import Iom from '../images/eps/1.png';
export default class Todos extends Component {
	render() {
		return(
			<div className="obj"  key={this.props.id.toString()}>


                        <div className="obj_img" style = {{backgroundImage: `url(${this.props.img})`}}></div>
                        <p className="obj_p">{this.props.name}</p>

            </div>
		)
	}
}
