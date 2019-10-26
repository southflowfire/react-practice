import React, { Component } from "react";

class App extends Component {
	state = {};
	render() {
		return(
            <ul className="my-list">
                <li>{false?'123':'456'}</li>
                <li>456</li>
            </ul>
        )
        // var child1 = React.createElement('li',null,'jspang');
        // var child2 = React.createElement('li',null,'jspang');
        // var root = React.createElement('ul',{className:'my-list'},child1,child2);
	}
}

export default App;
