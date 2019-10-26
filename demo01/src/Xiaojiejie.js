import React, { Component, Fragment } from "react";
class Xiaojiejie extends Component {
	state = {};
	constructor(props) {
		super(props);
		this.state = {
			inputVal: "jspang",
			list: ["基础按摩", "精油推背"]
		};
	}
	render() {
		return (
			<Fragment>
				<div>
					<input
						type="text"
						value={this.state.inputVal}
						onChange={this.inputChange.bind(this)}
					/>
					<button onClick={this.addList.bind(this)}>add</button>
				</div>
				<ul>
					{this.state.list.map((v, i) => {
						return <li key={i + v} onClick={this.deleteItem.bind(this,i)}>{v}</li>;
					})}
				</ul>
			</Fragment>
		);
	}
	inputChange(e) {
		console.log(e);
		console.log(e.target.value);
		this.setState({
			inputVal: e.target.value
		});
	}
	addList() {
		this.setState({
			list: [...this.state.list, this.state.inputVal],
			inputVal: ""
		});
    }
    deleteItem(index) {
        let list =  this.state.list;
        list.splice(index,1);
        this.setState({
            list:list,
        })
    }
}

export default Xiaojiejie;
