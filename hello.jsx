import React,{Component} from 'react';

class Hello extends Component {
	render() {
		const myStyle = {
			backgroundColor: 'yellow'
		};
		return <div>
		  <div style={myStyle}>Hello {this.props.name}</div>
		</div>;
	}
}

export default Hello;