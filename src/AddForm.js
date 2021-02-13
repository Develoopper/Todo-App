import React, { Component } from "react";

class AddForm extends Component {
	// Le state content stock la dérnière valeur inséré par l'utilisateur
	state = {
		content: "",
	};

	// La fonction éxecuté après chaque fois que l'utilisateur change la valeur de l'input
	handleChange = (e) => {
		// Le state 'content' est mis à jour
		this.setState({
			content: e.target.value,
		});
	};

	// La fonction éxecuté l'orsque l'utilisateur clique sur entré
	handleSubmit = (e) => {
		// Normalement, après qu'un formulaire est validé, le navigateur rafraichit la page
		// e.preventDefault() empèche le comportement par defaut du navigateur après un événement
		e.preventDefault();

		// Un todo est ajouté au tableau 'todos', avec le contenu saisie par l'utilisateur
		this.props.addTodo(this.state);

		// Ecraser l'ancien state par un nouveau
		this.setState({
			content: ""
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label for="addTodoInput">Ajouter</label>
				<div class="input-field">
					<input
						type="text"
						id="addTodoInput"
						onChange={this.handleChange}
						value={this.state.content}
					/>
				</div>
			</form>
		);
	}
}

export default AddForm;
