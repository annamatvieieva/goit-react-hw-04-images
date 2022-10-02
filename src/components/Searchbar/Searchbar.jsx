import { Component } from "react";


export class Searchbar extends Component {

	state = {
		value: '',
	};

	handleChange = e =>  {
		const { value } = e.target;
		this.setState({ value });
	}

	 reset = e => {
    this.setState({value: ''});
	};
	
  handleSubmit = e => {
    e.preventDefault();
		const { value } = this.state;
		if (value.trim() === '') {
			alert('Ви не ввели дані для пошуку');
		} else {
			this.props.onSubmit(value);
			this.reset();
		}
    
  };

 

	render() {

		const { value } = this.state;
		return (
			<header>
				<form onSubmit={this.handleSubmit}>
					<button type="submit">
						<span>Search</span>
					</button>
					<input
						type="text"
						value={value}
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
						onChange={this.handleChange}
					/>
				</form>
			</header>
		);
	};
};
