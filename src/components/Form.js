import React,{Component} from 'react';

export class Form extends Component{
  constructor () {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      prioridad: 'low'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleInput(e){
    
    console.log(e.target.value,e.target.name);
    const {value,name }=e.target;
    this.setState({
      [name]:value
    })
    console.log(this.state);
   }

   handleForm(e){
    console.log(this.state);
    e.preventDefault();
    this.props.onAddTodo(this.state);
   }

  render(){
    return(
      <div className="card">
         <form className="card-body" onSubmit={this.handleForm}>
            <div className="form-group">
              <h4>Componente Externo</h4>
                <input
                type="text"
                name="title"
                onChange={this.handleInput}
                className="form-control form-control-sm"
                placeholder="Title"
                />
              </div>
            <div className="form-group">
              <input
                type="text"
                name="responsable"
                onChange={this.handleInput}
                className="form-control form-control-sm"
                placeholder="Responsible"
                />
             </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              onChange={this.handleInput}
              className="form-control form-control-sm"
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="prioridad"
                className="form-control form-control-sm"
                onChange={this.handleInput}
             >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block text-uppercase">
            Save
          </button>
         </form>
      </div>
    );
  }
}

export default Form;