import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css';
import Modal from '../Modal.js'
import Form from '../Form/Form';

// THIS WAS ALL CREATED BEFORE I FOUND STYLED COMPONENTS.  
class Navbar extends Component {

    constructor(props) {
    super(props)

    this.state = {
      show: false,
      clicked: false,
      menuId: 1
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">JM</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                        <li><a 
                            className={item.cName} 
                            href={item.url}>
                            {item.title}    
                        </a></li>
                        )
                })}
                </ul>

            </nav>
        )
    }
}

export default Navbar
