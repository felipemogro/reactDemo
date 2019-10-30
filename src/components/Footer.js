import React,{Component} from 'react';

export class Footer extends Component {
  render(){
    return (
      <div className="mt-5">
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
          <div className="container text-center">
            <small>Copyright &copy; All Rigths Reserved.</small>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;