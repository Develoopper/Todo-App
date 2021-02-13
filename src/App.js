// Importer React pour pouvoir utiliser le JSX
// et importer la classe Component pour créer le component App
import React, { Component } from "react";
// Importer les Components à utiliser
import Todo from './Todo';
import AddForm from "./AddForm";

// App est un Component
class App extends Component {
  // On definie tous les states de notre component dans l'objet 'state'
  state = {
    todos: [
      { id: 1, content: 'Todo1' },
      { id: 2, content: 'Todo2' },
    ],  
  }

  // On ne doit changer le 'state' qu'en utilisant 'setState' et non 'state = ...'

  // La fonction qui permet de supprimer un todo du tableau 'todos'
  deleteTodo = (id) => {
    // 'filter' boucle sur le tableau et supprime les élements qui ne valides pas la condition
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    
    // Ecraser l'ancien state par un nouveau
    this.setState({
      todos: todos
    });
  }

  // La fonction qui permet d'ajouter un todo du tableau 'todos'
  addTodo = (todo) => {
    // Incrementer l'id
    todo.id = this.state.todos.length + 1;

    // Ajouter le todo à la fin du tableau
    let newTodos = [...this.state.todos, todo];

    // Ecraser l'ancien state par un nouveau
    this.setState({
      todos: newTodos
    })
  }

  // La fonction retourne la liste des todos
  listerTodos = () => {
    // 'map' boucle sur le tableau 'todos', éxecute la callback pour chaque case du tableau,
    // et renvoie un nouveau tableau avec les valeur retournées par la callback
    const listeTodos = this.state.todos.map((todo) => {
      // On crée un component 'Todo' et on le passe en props un id, un content et la fonction 'deleteTodo'
      return <Todo id={todo.id} content={todo.content} deleteTodo={this.deleteTodo} key={todo.id}/>;
    });

    return (
      <div className="todos collection">
        {listeTodos}
      </div>
    );
  }

  // 'render' est appelée en premier lieu pour afficher le component
  // et à chaque fois qu'on appelle setState 
  render() {
    return (
      <div className="App container">
        <h1 className="center teal-text darken-4">Todos</h1>
        
        {/* Afficher le formulaire de l'ajout */}
        <AddForm addTodo={this.addTodo} />

        { 
          // S'il n'y a plus de todos on affiche un message sinon on affiche la liste des todos
          this.state.todos.length === 0 ?
            <p>Ajouter un Todo depuis la zone de texte</p>
          :
            this.listerTodos()
        }
      </div>
    );
  }
}

export default App;
