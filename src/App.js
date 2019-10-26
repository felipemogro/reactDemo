import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navigation} from './components/Navigation';
import {todo} from './todo.json';
import Form from './components/Form';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);

  }

  handleAddTodo(todo){
    this.setState({
      todo:[...this.state.todo,todo]
    })
  }

  render(){
  const todo=  this.state.todo.map((todo,i)=>{
      return (
        <div className="col-md-4">
          <div className="card  mt-4">
            <div className="card-header">
              <h3>
              {todo.title}
              </h3>
              <span className="badge badge-pill badge-danger ml-2">{todo.prioridad}</span>
            </div>
            <div className="card-body">
              <p>
                {todo.description}
              </p>
              <p>
                <mark>{todo.responsable}</mark>
              </p>
              </div>
          </div>
        </div>

      )
    })
    return (
        <div className="App">
          <Navigation titulo="menu" cantidad={todo.length} />
          <div className="container">
            <div className="row mt-4">
            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <Form onAddTodo={this.handleAddTodo}></Form>
              </div>
              {todo}  
            </div>
          </div>

        </div>
      );
    }
  }
  

export default App;
