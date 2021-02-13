import React from "react";

// Le component 'Todo' n'a pas de state, donc on peut le définir sous form de fonction
// qui retourne directement le JSX à afficher
const Todo = (props) => {
	// L'objet props contient les données passées depuis 'App' à 'Todo'
	return (
		// Le todo est supprimé l'orsque l'utilisateur clique dessus
		<div 
			className="collection-item" 
			onClick={() => props.deleteTodo(props.id)}
		>
			{props.content}
		</div>
	);
};

export default Todo;
