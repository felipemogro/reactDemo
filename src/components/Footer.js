import React,{Component} from 'react';

export class Footer extends Component {
  render(){
    return (
      <body class="d-flex flex-column">
        <div id="page-content">
          <div class="container text-center">
            <div class="row justify-content-center">
              <div class="col-md-7">
                <h1 class="font-weight-light mt-4 text-white">Lista de Tareas</h1>
                <p class="lead text-white-50">Lista de tareas Simples hecho con React</p>
              </div>
            </div>
          </div>
        </div>
        <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
          <div class="container text-center">
            <small>Copyright &copy; All Rigths Reserved.</small>
          </div>
        </footer>
      </body>
    );
  }
}

export default Footer;