import React,{Component} from 'react';

export class Navigation extends Component {
  render(){
    return (
      <div className="Nav">
        <nav className="navbar navbar bg-dark">
          <a href="#" className="text-white">
            {this.props.titulo.toUpperCase()}
            <span className="badge badge-pill badge-info ml-4">
             {this.props.cantidad}
            </span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navigation;