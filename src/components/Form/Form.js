import React, { Component } from 'react'
import axios from 'axios'
import './form.css'

export class Form extends Component {  
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       phone: '',
       message: ''

    }
  }
  
  handleSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
    axios({
      method: "POST",
      url:"http://localhost:3000/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if(response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  resetForm(){
    this.setState({name: '', email: '', phone: '', message: ''})
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onPhoneChange(event) {
    this.setState({phone: event.target.value})
  }
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

    render() {
        return (
          <div className="background">
            <div className="container">
              <div className="screen">
                <div className="screen-header">
                  <div className="screen-header-left">
                    <div className="screen-header-button close" onClick={() => this.props.handleClose()}></div>
                  </div>
                  <div className="screen-header-right">
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                  </div>
                </div>
                <div className="screen-body">
                  <div className="screen-body-item left">
                    <div className="app-title">
                      <span>CONTACT</span>
                      <span>ME</span>
                    </div>
                    <div className="app-contact">CONTACT INFO : 1(619)861-3672</div>
                  </div>
                  <div className="screen-body-item">
                    <form className="app-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                      <div className="app-form-group">
                        <input className="app-form-control" id='name' name='name' value={this.state.name} onChange={this.onNameChange.bind(this)}placeholder="NAME" />
                      </div>
                      <div className="app-form-group">
                        <input className="app-form-control" id='email' name='email' value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder="EMAIL" />
                      </div>
                      <div className="app-form-group">
                        <input className="app-form-control"id='contact' name='contact' value={this.state.phone} onChange={this.onPhoneChange.bind(this)}placeholder="CONTACT NO" />
                      </div>
                      <div className="app-form-group message">
                        <input className="app-form-control" id='message' name='message' value={this.state.message} onChange={this.onMessageChange.bind(this)} placeholder="MESSAGE" />
                      </div>
                      <div className="app-form-group buttons">
                        <button className="app-form-button cancel" onClick={() => this.props.handleClose()}>CANCEL</button>

                        <button type='submit' className="app-form-button send">SEND</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Form
